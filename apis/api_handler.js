import axios from "axios";
// const host = "http://localhost:5000/"
const host = "https://grocerysavebackend.vercel.app/"
// signup api handler
export const signup = async (Full_Name,Email_Address,Password,Confirm_Password) => {
    try {
        const response = await axios.post(`${host}api/auth/signup`, Full_Name,Email_Address,Password,Confirm_Password);
        return response.data;
    } catch (error) {
        console.error('Error during signup:', error.message);
        throw error;
    }
}

// login api handler
export const login = async (Email_Address, Password) => {
    try {
        const response = await axios.post(`${host}api/auth/login`, { Email_Address, Password });
        console.log("api handler data>>",response.data);
        return response.data;
    } catch (error) {
        console.error('Error during login:', error.message);
        throw error;
    }
}

// add the category api handler
export const addCategory = async (Category_Name, token) => {
    try {
        const response = await axios.post(`${host}api/grocery/add_category`, { Category_Name }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("api data of the category added>>", response.data);
        return response.data
    } catch (error) {
        console.error('Error during adding category:', error.message);
        throw error
    }
}

// fetch categories api handler
export const fetchCategories = async (token) => {
    try {
        const response = await axios.get(`${host}api/grocery/get_all_category`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("api data of the fetch categories>>", response.data)
        return response.data
    } catch (error) {
        console.error('Error during fetching categories:', error.message);
        throw error
    }
}

// delete the categeory api handler
export const deleteCategory = async (id, token) => {
    try {
        const response = await axios.delete(`${host}api/grocery/delete_category/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("api data of the deleted category>>", response.data);
        return response.data
    } catch (error) {
        console.error('Error during deleting category:', error.message);
        throw error
    }
}

// add the associated items to th category api handler
export const addAssociatedItems = async (category, title, item, priority, token) => {
    try {
        const response = await axios.post(`${host}api/grocery-category/add_item`, {
            category, // Ensure this is the correct parameter name expected by the backend
            title,
            item,
            priority
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("api data of the associated item added>>", response.data);
        return response.data;
    } catch (error) {
        console.error('Error during adding associated item:', error.message);
        throw error;
    }
};

// fetch the associated item api handler
export const fetchCategoryItems = async (token, categoryId) => {
    try {
        const response = await axios.get(`${host}api/grocery-category/fetch_items/${categoryId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("api data of the fetched category items>>", response.data);
        return response.data;
    } catch (error) {
        console.error('Error during fetching category items:', error.message);
        throw error;
    }
}

// delete the associated item api handler
export const deleteAssociatedItem = async (token, categeory_id) => {
    try {
        const response = await axios.delete(`${host}api/grocery-category/category/${categeory_id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("api data of the deleted associated item>>", response.data);
        return response.data;
    } catch (error) {
        console.error('Error during deleting associated item:', error.message);
        throw error;
    }
}
