import React, {useState} from 'react'
import { Dropdown } from 'primereact/dropdown';

const UserForm = (props) => {
    const [selectedGender, setSelectedGender] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email:'',
        mobile:'',
        gender: '',
    });

    const [validInputs, setValidInputs] = useState({
        name: false,
        age: false,
        email: false,
        mobile: false,
        gender:false
    });

    // Function to handle changes in input fields
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        // Update validation state for the current input field
        setValidInputs({ ...validInputs, [name]: true });
        
        if(name === 'gender'){
            setSelectedGender(event.target.value);
            setValidInputs({...validInputs, [name]: true})
        }
    };

    const sendDataToParent = () => {
        // Check if all input fields are valid
        const allInputsValid = Object.values(validInputs).every(input => input);
        console.log(validInputs);
        if (allInputsValid) {
            console.log(formData);
            props.sendDataToParent(formData);
        } else {
            alert('Please fill all the fields.');
        }
    };

    const genders = ["Male", "Female"]

    return (
        <div className='flex flex-col gap-10'>
            <div className='flex gap-10'>
                <input onChange={handleInputChange} name='name' className='bg-primary text-2xl pl-4 placeholder:text-[#9B9B9B] w-[501px] h-[76px] border border-[#9B9B9B]' type='text' placeholder='Enter your name'></input>
                <input onChange={handleInputChange} name='age' className='bg-primary text-2xl pl-4 placeholder:text-[#9B9B9B] w-[250px] h-[76px] border border-[#9B9B9B]' type='text' placeholder='Enter your age'></input>
                <Dropdown 
                value={selectedGender} name='gender' onChange={handleInputChange}
                options={genders}
                placeholder="Gender"
                panelClassName='border border-[#9B9B9B] h-[100px] flex flex-col justify-between bg-primary pl-4 pt-4 text-2xl'
                className='bg-primary flex justify-center items-center text-2xl pl-4 pr-4 placeholder:text-[#9B9B9B] w-[280px] h-[76px] border border-[#9B9B9B]'>
                </Dropdown>
            </div>
            <div className='flex gap-10'>
                <input onChange={handleInputChange} name='mobile' className='bg-primary text-2xl pl-4 placeholder:text-[#9B9B9B] w-[426px] h-[76px] border border-[#9B9B9B]' type='text' placeholder='Enter your Mobile number'></input>
                <input onChange={handleInputChange} name='email' className='bg-primary text-2xl pl-4 placeholder:text-[#9B9B9B] w-[426px] h-[76px] border border-[#9B9B9B]' type='text' placeholder='Enter your email'></input>
            </div>
        <div className='w-full flex justify-center'>
            <button onClick={sendDataToParent} className='w-[155px] h-[55px] mt-20 border border-[#D9D9D9] bg-blue-600 text-black font-semibold text-2xl'>Start</button>
        </div>
        </div>
    )
}

export default UserForm