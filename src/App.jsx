import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import Questions from './components/Questions'
import Result from './components/Result'
import Button from './components/Buttons'
import { FaRegQuestionCircle } from "react-icons/fa";

function App() {

  const [isOver, setIsOver] = useState(false)
  const [score, setScore] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleReset = () => {
    setIsOver(false);
    setScore(0);
    setCurrentIndex(0);
  }

  return (
    <>
      <div className='h-screen'>
        <h2 className='text-center text-4xl max-sm:text-2xl font-bold text-[#fbff21] py-3 max-sm:mb-0 uppercase bg-[#252768] flex justify-center items-center gap-2 sticky top-0'><FaRegQuestionCircle /> Quiz App</h2>
        <div className='container mx-auto max-sm:px-3'>
          {isOver ? (
            <>
              <div className='text-center text-white text-2xl flex flex-col items-center justify-center h-[90vh]'>
                <Result score={score} />
                <button type='submit' onClick={handleReset} className='py-2 px-6 rounded-full cursor-pointer bg-white text-[#323581] text-lg font-medium uppercase hover:bg-[#fbff21] transition-all ease-in delay-40 mt-15'>Restart</button>
              </div>
            </>
          ) : (
            <>
              <div className='grid max-sm:grid-cols-1 grid-cols-3 max-sm:h-auto items-center pt-25'>
                <div className='col-span-2 flex items-center max-sm:order-2'>
                  <Questions setIsOver={setIsOver} setScore={setScore} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                </div>
                <div className='flex items-center justify-center border-8 border-white size-60 max-sm:size-45 text-center text-white rounded-full font- text-2xl max-sm:m-auto max-sm:mt-8'><Timer setIsOver={setIsOver} /></div>
              </div>
            </>
          )}
        </div>
      </div>

    </>
  )
}


export default App
