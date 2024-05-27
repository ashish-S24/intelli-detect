const tf = require('@tensorflow/tfjs');
const fs = require('fs');
const path = require('path');

// Function to load images from a directory and convert them to tensors
// Function to load images from a directory and convert them to tensors
const loadImages = async function(directory) {
    const imageFiles = fs.readdirSync(directory);
    const images = [];
    const labels = [];
    const labelSet = new Set();
    for (const file of imageFiles) {
        if (file.endsWith('.jpg') || file.endsWith('.png')) {
            const filePath = path.join(directory, file);
            const buffer = fs.readFileSync(filePath);
            const imageTensor = tf.node.decodeImage(buffer, 1); // Set channels to 1 for grayscale
            images.push(imageTensor);
            // Extract label from file name (assuming file name format: <label>_image.jpg)
            const label = parseInt(file.split('_')[0]);
            labels.push(label);
            labelSet.add(label);
        }
    }

    // Simplify labels to be in the range 0 to numCategories - 1
    const labelMapping = Array.from(labelSet);
    const simplifiedLabels = labels.map(label => labelMapping.indexOf(label));

    const numCategories = labelSet.size;
    return { images, labels: simplifiedLabels, numCategories };
};


// Function to preprocess and batch images
const preprocessImages = function(images, labels, batchSize, numCategories) {
    const oneHotLabels = labels.map(label => tf.oneHot(label, numCategories));

    const dataset = tf.data.zip({
        xs: tf.data.array(images),
        ys: tf.data.array(oneHotLabels)
    }).batch(batchSize);
    return dataset;
};


// Function to rotate images by 90 degrees
const rotate90 = function(image) {
    // Transpose the image
    const transposedImage = tf.transpose(image, [1, 0, 2]);
    // Reverse the transposed image along the first dimension
    const rotatedImage = tf.reverse(transposedImage, [0]);
    return rotatedImage;
};
// Function to adjust contrast of an image tensor



// Function to augment images
const augmentImages = function(images) {
    const augmentedImages = [];
    for (const image of images) {
        // Original image
        augmentedImages.push(image);

        // Rotate versions
        augmentedImages.push(rotate90(image)); // Rotate image by 90 degrees
        augmentedImages.push(rotate90(image).reverse(1)); // Rotate image by 180 degrees
        augmentedImages.push(rotate90(image, 3).reverse(0)); // Rotate image by 270 degrees
    }
    return augmentedImages;
};


 


// Fingerprint training & test data directories
const trainDataDir = './uploads/train';
const testDataDir = './uploads/test';
    
// Define model architecture
const buildModel = function(numCategories) {
    // Define input layer
    const inputs = tf.input({ shape: [90, 90, 1] });

    // Shared feature extraction layers
    let feature = tf.layers.conv2d({
        filters: 32,
        kernelSize: 3,
        padding: 'same',
        activation: 'relu'
    }).apply(inputs);
    feature = tf.layers.maxPooling2d({
        poolSize: 2
    }).apply(feature);

    feature = tf.layers.conv2d({
        filters: 32,
        kernelSize: 3,
        padding: 'same',
        activation: 'relu'
    }).apply(feature);
    feature = tf.layers.maxPooling2d({
        poolSize: 2
    }).apply(feature);

    // Additional layers
    let net = tf.layers.conv2d({
        filters: 32,
        kernelSize: 3,
        padding: 'same',
        activation: 'relu'
    }).apply(feature);
    net = tf.layers.maxPooling2d({
        poolSize: 2
    }).apply(net);

    net = tf.layers.flatten().apply(net);

    net = tf.layers.dense({
        units: 64,
        activation: 'relu'
    }).apply(net);

    const output = tf.layers.dense({
        units: numCategories,
        activation: 'softmax' // Use softmax activation for multi-class classification
    }).apply(net);

    const model = tf.model({ inputs: inputs, outputs: output });

    model.compile({
        loss: 'categoricalCrossentropy', // Use categorical crossentropy for multi-class classification
        optimizer: 'adam',
        metrics: ['accuracy']
    });

    return model;
};


// Train the model
const trainModel = async function(model, trainData) {
    await model.fitDataset(trainData, {
        epochs: 5,
        callbacks: {
            onEpochEnd: async (epoch, logs) => {
                console.log(`Epoch ${epoch + 1} - loss: ${logs.loss.toFixed(4)}, acc: ${logs.acc.toFixed(4)}`);
            }
        }
    });
};

// Test the model
const evaluateModel = async function(model, testData) {
    // Extract the input data tensor from testData
    testData= await testData.toArray();
    const inputData = testData[0].xs;
    console.log(testData[0].ys )

    // Make predictions for the single test image
    const predictions = await model.predict(inputData).array();

    // Find the class with the highest confidence score
    const bestClass = predictions[0].indexOf(Math.max(...predictions[0]));
    const confidence = Math.max(...predictions[0]);

    // Print the prediction results
    console.log(`Test Image: Predicted Class - ${bestClass}, Confidence: ${(confidence * 100).toFixed(2)}%`);

    // If the test label is NaN, print a warning
    if (isNaN(testData[0].ys[0])) {
        console.warn(`Warning: Test label is NaN`);
    }
};


 





// Main function
const run = async function() {
    // Load and preprocess training images and labels
    const { images: trainImages, labels: trainLabels, numCategories } = await loadImages(trainDataDir);
    const augmentedTrainImages = augmentImages(trainImages);
    const allTrainImages = trainImages.concat(augmentedTrainImages);
    const allTrainLabels = trainLabels.concat(trainLabels); // Assuming labels remain the same for augmented images
    const trainData = preprocessImages(allTrainImages, allTrainLabels, 100, numCategories);

    // Load and preprocess test images and labels
    const { images: testImages, labels: testLabels } = await loadImages(testDataDir);

    const testData = preprocessImages(testImages, testLabels, 100, numCategories);
    
    // Build the model
    const model = buildModel(numCategories);
    model.summary();
    
    // Train the model
    console.log('\nTraining model...');
    await trainModel(model, trainData);

    // Evaluate the model
   console.log('\nEvaluating model...');
    await evaluateModel(model, testData);

    console.log('Shape of training data:');
    trainData.toArray().then((dataArray) => {
        dataArray.forEach((example) => {
            const xsShape = example.xs.shape;
            const ysShape = example.ys.shape;
            console.log(`xs shape: ${xsShape}, ys shape: ${ysShape}`);
        });
    });
    
    console.log("Test data:", testData);

};

// Run the script
run().catch(console.error);
