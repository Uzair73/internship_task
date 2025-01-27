import React, { useState } from 'react'
import { ImCross } from "react-icons/im"
import Button from './Button'

const Modal = ({ addCategory, closeModal }) => {
  const [categoryName, setCategoryName] = useState('')

  const handle_change = e => {
    setCategoryName(e.target.value)
  }

  const handle_submit = e => {
    e.preventDefault()
    addCategory(categoryName)
    setCategoryName('')
  }

  return (
    <div className="my-5 bg-[#f9fafb] p-4 shadow-lg rounded-lg z-10">
    <div className="flex justify-bewteen items-center gap-14">
      <h3 className="text-lg font-semibold text-gray-900">New Category</h3>
      <ImCross className='text-sm cursor-pointer' onClick={closeModal}/>
      </div>
      <form onSubmit={handle_submit} className="mt-3">
        <input
          type="text"
          name="categoryName"
          value={categoryName}
          onChange={handle_change}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#047857] block w-full p-2.5"
          placeholder="Type category name"
          required
        />
        <Button
          type="submit"
          classname="mt-2 text-white bg-[#059669] hover:bg-[#047857] font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer"
          btn_text={"Add Category"}
        />
      </form>
    </div>
  )
}

export default Modal