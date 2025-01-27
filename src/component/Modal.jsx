import { useState } from 'react'
import { ImCross } from "react-icons/im"
import Button from './Button'
import { addCategory } from '../../apis/api_handler'
import Cookies from 'js-cookie'

const Modal = ({ closeModal, refreshCategories }) => {
  const [categoryName, setCategoryName] = useState('')

  const handleChange = (e) => {
    setCategoryName(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = Cookies.get("auth_token")
    try {
      await addCategory(categoryName, token)
      setCategoryName('')
      refreshCategories()
      closeModal()
    } catch (error) {
      console.error('Failed to add category:', error)
    }
  }

  return (
    <div className="my-5 bg-[#f9fafb] p-4 shadow-lg rounded-lg z-10">
    <div className="flex justify-bewteen items-center gap-14">
      <h3 className="text-lg font-semibold text-gray-900">New Category</h3>
      <ImCross className='text-sm cursor-pointer' onClick={closeModal}/>
      </div>
      <form onSubmit={handleSubmit} className="mt-3">
        <input
          type="text"
          name="categoryName"
          value={categoryName}
          onChange={handleChange}
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