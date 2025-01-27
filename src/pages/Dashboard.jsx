import { useState } from 'react';
import Navbar from "../component/Navbar";
import Sidebar from '../component/Sidebar';
import { FaSpinner } from 'react-icons/fa';
import Button from '../component/Button';
import { FaPlus } from "react-icons/fa6";
import Modal_2 from '../component/Modal_2';
import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { fetchCategoryItems } from '../../apis/api_handler';
import Cookies from 'js-cookie';

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lists, setLists] = useState([]);

  const handleCategorySelection = async (category) => {
    if (!category || !category._id) {
      console.error('Invalid category selected:', category);
      return;
    }
    setIsLoading(true);
    setSelectedCategory(category);
    try {
      const token = Cookies.get('auth_token');
      const response = await fetchCategoryItems(token, category._id);
      if (response.success) {
        const fetchedItems = response.data.items;
        setLists(Array.isArray(fetchedItems) ? fetchedItems : []);
      } else {
        console.error('Failed to retrieve items:', response.message);
        setLists([]);
      }
    } catch (error) {
      console.error('Error fetching category items:', error);
      setLists([]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleItemCompletion = (listIndex, itemIndex) => {
    setLists(prevLists =>
      prevLists.map((list, i) => {
        if (i === listIndex) {
          const updatedItems = list.item.map((item, j) => {
            if (j === itemIndex) {
              return { ...item, isChecked: !list.completed }
            }
            return item;
          });
          return { ...list, item: updatedItems, completed: !list.completed }
        }
        return list;
      })
    );
  };

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
                        <Button classname={"cursor-pointer"} btn_text={"Add List"} onClick={() => setIsModalOpen(true)} />
                      </div>
                      {/* Render the fetched items here */}
                      <div className="flex flex-col gap-4 w-[78vw]">
                        {lists.map((list, listIndex) => (
                          <div key={list._id} className="bg-white p-4 rounded-lg shadow mb-4">
                            <div className="flex justify-between items-center w-full gap-4">
                              <h4 className="font-semibold text-2xl">{list.title}</h4>
                              <MdDelete
                                className="text-3xl text-red-500 cursor-pointer"
                                onClick={() => console.log(`Delete list with ID: ${list._id}`)}
                              />
                            </div>
                            <ul className="list-none space-y-3 mt-3">
                              {(list.item || []).map((item, itemIndex) => {
                                const itemName = Object.keys(item)
                                  .filter(key => !isNaN(key))
                                  .sort((a, b) => a - b)
                                  .map(key => item[key])
                                  .join('')
                                return (
                                  <li key={itemIndex} className="flex items-center">
                                    {list.completed ? (
                                      <FaCheckCircle
                                        className="text-green-500 text-xl mr-3 cursor-pointer"
                                        onClick={() => toggleItemCompletion(listIndex, itemIndex)}
                                      />
                                    ) : (
                                      <input
                                        type="radio"
                                        className="mr-5 cursor-pointer"
                                        onClick={() => toggleItemCompletion(listIndex, itemIndex)}
                                      />
                                    )}
                                    <span
                                      className={`cursor-pointer ${list.completed ? "line-through text-gray-500" : "text-gray-700"}`}
                                      onClick={() => toggleItemCompletion(listIndex, itemIndex)}
                                    >
                                      {itemName}
                                    </span>
                                  </li>
                                );
                              })}
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
                <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsModalOpen(false)}></div>
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <Modal_2 onClose={() => setIsModalOpen(false)} />
                </div>
              </>
            )}
          </main>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
