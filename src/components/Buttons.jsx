import React from 'react'

const Buttons = ({del, edit, children}) => {

  return (
    <>
      <button className='py-3 px-5 bg-[#111111] rounded-md text-white mx-2 cursor-pointer'>{children}</button>
    </>
  )
}

export default Buttons
