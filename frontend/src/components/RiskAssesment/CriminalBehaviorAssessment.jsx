import React, { useState } from 'react';
import { questions } from './questions';


function CriminalBehaviorAssessment (props) {
  // State to store selected answers for each question
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Function to handle click event on radio buttons
  const handleDotClick = (questionNumber, responseValue) => {
    setSelectedAnswers({ ...selectedAnswers, [questionNumber]: responseValue });
  };

  const onSubmitHandle = () => {
    props.onSubmit(selectedAnswers);
  }

  // Function to render radio buttons for a single question
  const renderRadioButtons = (questionNumber) => {
    const responses = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];

    return responses.map((response, index) => (
      <td className="option border-2 border-blue-600" key={index}>
        <div className='flex justify-center'>
        <div
          className={`dot ${selectedAnswers[questionNumber] === index ? 'bg-green-400' : 'bg-white'} w-4 h-4 rounded-full`}
          id={`q${questionNumber}_${index}`}
          onClick={() => handleDotClick(questionNumber, index)}
        ></div>
        </div>
      </td>
    ));
  };

  // Function to render table rows for questions
  const renderRows = () => {
    
    return questions.map((question, index) => (
      <tr className='border-2 border-blue-600' key={index}>
        <td className='border-2 border-blue-600 p-4'>{question}</td>
        {renderRadioButtons(index + 1)} {/* Question numbering starts from 1 */}
      </tr>
    ));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='w-full h-full'>
      <form className="flex flex-col justify-center" action="" method="" onSubmit={handleSubmit}>
        <table className='border border-blue-600 w-full'>
          <thead>
            <tr className='border border-blue-600'>
              <th className='border-2 border-blue-600 p-4'>Question</th>
              <th className='border-2 border-blue-600'>Strongly Disagree</th>
              <th className='border-2 border-blue-600'>Disagree</th>
              <th className='border-2 border-blue-600'>Neutral</th>
              <th className='border-2 border-blue-600'>Agree</th>
              <th className='border-2 border-blue-600'>Strongly Agree</th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
        <div className='w-full flex justify-center'>
            <button onClick={onSubmitHandle} type='submit' className='w-[155px] h-[55px] mt-20 border border-[#D9D9D9] bg-blue-600 text-black font-semibold text-2xl' >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CriminalBehaviorAssessment;
