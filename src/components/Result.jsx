import React from 'react'

const Result = ({ score }) => {
    return (
        <>
            <div className='flex flex-col justify-center align-middle text-2xl h-[90vh] overflow-y-hidden'>
                <div className='text-3xl uppercase font-semibold max-sm:text-2xl'>🎉Congratulations!🎉</div>
                <h2 className='text-3xl uppercase font-semibold text-[#fbff21] max-sm:text-2xl'>Your score is {score}</h2>
            </div>
        </>
    )
}

export default Result