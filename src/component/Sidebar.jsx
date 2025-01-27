import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6"
import Modal from './Modal'
import { ImCross } from "react-icons/im"
import Button from './Button'

const Sidebar = ({ onCategorySelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [categories, setCategories] = useState([])

  function showModal() {
    setIsModalOpen(true)
  }

  function hideModal() {
    setIsModalOpen(false)
  }

  function addNewCategory(categoryName) {
    if (categoryName) {
      setCategories([...categories, categoryName])
    }
    hideModal()
  }

  function onCategoryClicked(categoryName) {
    onCategorySelect(categoryName)
  }

  function deleteCategory(indexToRemove) {
    setCategories(categories.filter((_, index) => index !== indexToRemove))
  }

  return (
    <aside className="bg-white text-black w-64 min-h-screen p-4">
      <div className="flex justify-between px-3 py-8">
        <h1 className='text-xl'>Categories</h1>
        <FaPlus className='text-2xl text-green-400 cursor-pointer' onClick={showModal} />
      </div>
      {isModalOpen && <Modal addCategory={addNewCategory} closeModal={hideModal} />}
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="flex justify-between items-center px-4 my-2">
            <Button
              classname='w-full hover:bg-gray-50 px-3 py-2 mx-2 rounded-md cursor-pointer text-start text-lg font-[400]'
              btn_text={category}
              onClick={() => onCategoryClicked(category)}
            />
            <ImCross className='text-sm cursor-pointer' onClick={() => deleteCategory(index)} />
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar