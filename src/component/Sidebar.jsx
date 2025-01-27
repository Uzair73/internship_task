import { useState, useEffect } from 'react';
import { FaPlus } from "react-icons/fa6";
import Modal from './Modal';
import { ImCross } from "react-icons/im";
import Button from './Button';
import { deleteCategory, fetchCategories } from '../../apis/api_handler';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import Modal_2 from './Modal_2';

const Sidebar = ({ onCategorySelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const fetchAndSetCategories = async () => {
    const token = Cookies.get('auth_token');
    if (token) {
      try {
        const response = await fetchCategories(token);
        if (response.success && Array.isArray(response.data)) {
          setCategories(response.data);
        } else {
          console.error('Unexpected response format:', response);
          setCategories([]);
          Swal.fire({
            title: 'Error!',
            text: 'Unexpected response format.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
        setCategories([]);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to fetch categories.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };

  useEffect(() => {
    fetchAndSetCategories();
  }, []);

  const showModal = () => setIsModalOpen(true);

  const hideModal = () => setIsModalOpen(false);

  const addNewCategory = categoryName => {
    if (categoryName) {
      setCategories([...categories, categoryName]);
      Swal.fire({
        title: 'Success!',
        text: 'Category added successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
    hideModal();
  };

  const delete_category = async indexToRemove => {
    const categoryToDelete = categories[indexToRemove];
    const token = Cookies.get('auth_token');

    if (categoryToDelete?._id && token) {
      try {
        const response = await deleteCategory(categoryToDelete._id, token);

        if (response.success) {
          setCategories(categories.filter((_, index) => index !== indexToRemove));
          Swal.fire({
            title: 'Success!',
            text: 'Category deleted successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        } else {
          console.error('Failed to delete category from server:', response.message || response);
          Swal.fire({
            title: 'Error!',
            text: 'Failed to delete category from server.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      } catch (error) {
        console.error('Error deleting category:', error.message);
        Swal.fire({
          title: 'Error!',
          text: 'Error deleting category.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } else {
      console.error('Missing category ID or auth token');
      Swal.fire({
        title: 'Error!',
        text: 'Missing category ID or auth token.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const onCategoryClicked = category => onCategorySelect(category);

  return (
    <aside className="bg-white text-black w-64 min-h-screen p-4">
      <div className="flex justify-between px-3 py-8">
        <h1 className='text-xl'>Categories</h1>
        <FaPlus className='text-2xl text-green-400 cursor-pointer' onClick={showModal} />
      </div>
      {isModalOpen && <Modal addCategory={addNewCategory} closeModal={hideModal} refreshCategories={fetchAndSetCategories} />}
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="flex justify-between items-center px-4 my-2">
            <Button
              classname='w-full hover:bg-gray-50 px-3 py-2 mx-2 rounded-md cursor-pointer text-start text-lg font-[400]'
              btn_text={category.Category_Name}
              onClick={() => onCategoryClicked(category)}
            />
            <ImCross className='text-sm cursor-pointer' onClick={() => delete_category(index)} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;