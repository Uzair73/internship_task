import axios from "axios";
const host = "http://localhost:5000/"
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