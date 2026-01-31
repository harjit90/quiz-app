import React, { useState } from 'react'
import questions from '../questions.json'

const Questions = ({ setIsOver, setScore, currentIndex, setCurrentIndex }) => {

  // const [currentIndex, setCurrentIndex] = useState(0);

  const optionHandleClick = (selectedOption) => {
    if (selectedOption === questions[currentIndex].answer) {
      setScore(prev => prev + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsOver(true);
    }
  }

  return (
    <div className='w-full text-center'>
      <h2 className='text-3xl py-5 text-white'>{questions[currentIndex].question}</h2>
      <div className='w-full'>
        {
          questions[currentIndex].options.map((option) => {
            return (
              <button className='flex flex-col gap-5 w-100 max-sm:w-full p-4 max-sm:p-2 m-auto bg-[#dfdfdf] text-[#323581]
                mb-4 rounded-sm text-[18px] font-medium cursor-pointer' key={option} onClick={() => { optionHandleClick(option) }}>{option}</button>
            )
          })
        }
      </div>
    </div>
  )
}

export default Questions
