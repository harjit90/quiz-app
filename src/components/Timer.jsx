import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Timer = ({ setIsOver }) => {

    const [leftTime, setLeftTime] = useState(300);
    const [displayTime, setDisplayTime] = useState();

    // left time logic
    useEffect(() => {

        let inertvalId = setInterval(() => {
            setLeftTime(prev => {
                if (prev <= 0) {
                    clearInterval(inertvalId);
                    return 0;
                }
                return prev - 1;
            })
        }, 1000);

        return () => {
            clearInterval(inertvalId)
        }
    }, [])

    // time format logic
    useEffect(() => {
        if (leftTime === 0) {
            setIsOver(true);
        }
        let formattedTime = (`${(Math.floor(leftTime / 60)).toString().padStart(2, 0)} : ${(leftTime % 60).toString().padStart(2, 0)}`)
        setDisplayTime(formattedTime);
    }, [leftTime])

    return (
        <>
            <h1><span className='uppercase'>Time Left :</span> <p className='text-4xl font-bold text-[#fbff21]'>{displayTime}</p></h1>
        </>
    )
}

export default Timer
