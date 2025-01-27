import { useState } from 'react'
import Navbar from "../component/Navbar"
import Sidebar from '../component/Sidebar'
import { FaSpinner } from 'react-icons/fa'
import Button from '../component/Button'
import { FaPlus } from "react-icons/fa6"
import Modal_2 from '../component/Modal_2'
import { MdDelete } from "react-icons/md"
import { FaCheckCircle } from "react-icons/fa"

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [lists, setLists] = useState([])

  const handleCategorySelection = category => {
    setIsLoading(true)
    setSelectedCategory(category)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  const toggleModalVisibility = () => {
    setIsModalOpen(!isModalOpen)
  }

  const addNewList = newList => {
    setLists(prevLists => [...prevLists, newList])
    toggleModalVisibility()
  }

  const changeItemStatus = (listIndex, itemIndex) => {
    setLists(prevLists =>
      prevLists.map((list, i) => {
        if (i === listIndex) {
          const updatedItems = list.items.map((item, j) => {
            if (j === itemIndex) {
              return { ...item, isChecked: !item.isChecked }
            }
            return item
          })
          return { ...list, items: updatedItems }
        }
        return list
      })
    )
  }

  return (
    <>
      <section>
        <div className="flex py-16">
          <div className="flex">
            <Sidebar onCategorySelect={handleCategorySelection} />
          </div>
          <main className="flex-1 bg-gray-100 min-h-screen relative">
            <Navbar />
            <div className={`p-8 my-8 ${selectedCategory ? "flex" : "mx-auto w-[77vw] bg-gray-50 border-4 border-dotted border-gray-300 rounded-lg"} `}>
              {selectedCategory ? (
                <>
                  {isLoading ? (
                    <div className="flex justify-center mx-auto items-center">
                      <FaSpinner className="animate-spin" />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center border border-white text-white rounded-lg bg-[#059669] px-11 py-1 mb-4">
                        <FaPlus className='text-2xl' />
                        <Button classname={"cursor-pointer"} btn_text={"Add List"} onClick={toggleModalVisibility} />
                      </div>
                      <div className="flex flex-col gap-4 w-[78vw]">
                        {lists.map((list, listIndex) => (
                          <div key={listIndex} className="bg-white p-4 rounded-lg shadow mb-4">
                            <div className="flex justify-between items-center w-full gap-4">
                              <h4 className="font-semibold text-2xl">{list.title}</h4>
                              <MdDelete className="text-3xl text-red-500 cursor-pointer" />
                            </div>
                            <ul className="list-none space-y-3 mt-3">
                              {list.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-center">
                                  {item.isChecked ? (
                                    <FaCheckCircle
                                      className="text-green-500 text-xl mr-3 cursor-pointer"
                                      onClick={() => changeItemStatus(listIndex, itemIndex)}
                                    />
                                  ) : (
                                    <input
                                      type="radio"
                                      name={`list-${listIndex}`}
                                      className="mr-5 text-6xl cursor-pointer"
                                      checked={false}
                                      onClick={() => changeItemStatus(listIndex, itemIndex)}
                                    />
                                  )}
                                  <span
                                    className={`cursor-pointer ${item.isChecked ? "line-through text-gray-500" : "text-gray-700"
                                      }`}
                                    onClick={() => changeItemStatus(listIndex, itemIndex)}
                                  >
                                    {item.name}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <h2 className="text-center text-gray-500">Please select a category to view lists</h2>
              )}
            </div>
            {isModalOpen && (
              <>
                <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleModalVisibility}></div>
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <Modal_2 addList={addNewList} onClose={toggleModalVisibility} />
                </div>
              </>
            )}
          </main>
        </div>
      </section>
    </>
  )
}

export default Dashboard