const Categories = require('../models/Grocery_categories/categories');

// Create a new category
const createCategory = async (req, res) => {
    try {
        const { Category_Name } = req.body;
        const userId = req.user._id; //find the user by the id
        console.log("user id>>", userId);
        const newCategory = new Categories({ Category_Name: Category_Name, user: userId })
        await newCategory.save();
        res.status(201).json({ success: true, data: newCategory });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//get categories only for the user
const getAllCategories = async (req, res) => {
    try {
        const userId = req.user._id
        const categories = await Categories.find({ user: userId })
        res.status(200).json({ success: true, data: categories })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};

// // Retrieve a single category by id
// const getCategoryById = async (req, res) => {
//     try {
//         const category = await Categories.findById(req.params.id);
//         if (!category) return res.status(404).json({ message: 'Category not found' });
//         res.status(200).json(category);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// Delete a category by id
const deleteCategory = async (req, res) => {
    try {
        const category = await Categories.findByIdAndDelete(req.params.id);
        if (!category) return res.status(404).json({ success: false, message: 'Category not found' });
        res.status(200).json({ success: true, message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createCategory,
    getAllCategories,
    deleteCategory
};
