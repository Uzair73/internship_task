import React from 'react'

const Button = ({ btn_text, onClick, type = 'button', classname }) => {
  return (
    <button type={type} className={`px-3 py-2 rounded-md ${classname}`} onClick={onClick}>
      {btn_text}
    </button>
  )
}

export default Button