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