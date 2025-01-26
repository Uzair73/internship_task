const express = require('express');
const router = express.Router();
const { add_items, fetch_items_by_category, delete_items_by_category, updateItem_status} = require('../../controller/grocery_category_items');
const authMiddleware = require('../../middleware/auth_middleware');

router.post('/add_item', authMiddleware, add_items)
router.get('/fetch_items/:categoryId', authMiddleware, fetch_items_by_category)
router.delete('/category/:categoryId', authMiddleware, delete_items_by_category);
router.put('/items/:itemId/status', authMiddleware, updateItem_status);

module.exports = router;
