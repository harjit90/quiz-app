import React from 'react'

const Result = ({ score }) => {
    return (
        <>
            <div className='flex flex-col justify-center align-middle text-2xl overflow-y-hidden'>
                {score <= 10
                    ? <>
                        <h2>Oops! <span className='inline-block w-full pt-4'>You are Fail 😒</span></h2>
                        <h2 className='text-3xl uppercase font-semibold text-[#fbff21] max-sm:text-2xl py-4'>Your score is {score}</h2>
                        <p>Practice more and come back again</p>
                    </>
                    : <>
                        <h2>Congratulations! <span className='inline-block w-full pt-4'>You are Pass 😊</span></h2>
                        <h2 className='text-3xl uppercase font-semibold text-[#fbff21] max-sm:text-2xl py-4'>Your score is {score}</h2>
                        <p>Keep Learning </p>
                    </>
                }
                {/* <div className='text-3xl uppercase font-semibold max-sm:text-2xl'>🎉Congratulations!🎉</div> */}

            </div>
        </>
    )
}

export default Result