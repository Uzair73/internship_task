const express = require('express');
const router = express.Router();
const { createCategory, getAllCategories , deleteCategory } = require('../../controller/grocery_category');
const authMiddleware = require('../../middleware/auth_middleware');

router.post('/add_category', authMiddleware, createCategory);
router.get('/get_all_category', authMiddleware, getAllCategories);
router.delete('/delete_category/:id', authMiddleware, deleteCategory);

module.exports = router;
