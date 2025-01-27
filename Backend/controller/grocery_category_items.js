const CategoryItemsList = require('../models/grocery_items/items')
const Categories = require('../models/Grocery_categories/categories')


// add the items by the specific category id
const add_items = async (req, res) => {
    try {
        const { title, item: items, priority, category } = req.body;
        if (!Array.isArray(items)) {
            return res.status(400).json({ success: false, message: "Item must be an array" });
        }
        const userId = req.user._id;   // fetch the user login id
        const newItems = items.map(item => ({
            title,
            item,
            priority,
            category,
            user: userId,
        }));
        const create_items = await CategoryItemsList.insertMany(newItems);  // add the multiple items to the db

        // Debugging: Log the category ID
        console.log('Category ID:', category);

        const category_details = await Categories.findById(category);  // find the id of the category

        // Debugging: Log the category details
        console.log('Category Details:', category_details);

        const response = {
            title,
            category: category_details ? category_details.Category_Name : "Unknown Category",
            items: create_items.map(items => ({
                id: items._id,
                item: items.item,
                priority: items.priority,
                completed: items.completed,
            })),
        };
        return res.status(201).json({ success: true, message: "Items added successfully", data: response });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Fetch items for a specific category
const fetch_items_by_category = async (req, res) => {
    try {
        const { categoryId } = req.params
        // check if the category exits or not
        const category = await Categories.findById(categoryId);
        if (!category) {
            return res.status(404).json({ success: false, message: "Items not found" });
        }
        // Fetch all items associated with the category
        const items = await CategoryItemsList.find({ category: categoryId })
        return res.status(200).json({
            success: true,
            message: "Items retrieved successfully",
            data: {
                category: category.Category_Name,
                items,
            },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


// Delete a category and its associated items
const delete_item_by_id = async (req, res) => {
    try {
        const { itemId } = req.params;
        console.log("item id>>", itemId);
        

        // Check if the item exists or not
        const item = await CategoryItemsList.findById(itemId);
        if (!item) {
            return res.status(404).json({ success: false, message: "Item not found" });
        }
        // Delete the item
        await CategoryItemsList.findByIdAndDelete(itemId);
        return res.status(200).json({ success: true, message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update the status if complete
const updateItem_status = async (req, res) => {
    try {
        const { itemId } = req.params
        const { completed } = req.body
        // Validate input
        if (typeof completed !== 'boolean') {
            return res.status(400).json({ success: false, message: "Invalid 'completed' status" });
        }
        const updatedItem = await CategoryItemsList.findByIdAndUpdate(itemId,{completed},{new: true})
        if (!updatedItem) {
            return res.status(404).json({ success: false, message: "Item not found" });
        }
        return res.status(200).json({
            success: true,
            message: "Item updated successfully",
            data: {
                id: updatedItem._id,
                item: updatedItem.item,
                completed: updatedItem.completed,
            },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


module.exports = { add_items, fetch_items_by_category, delete_item_by_id, updateItem_status };
