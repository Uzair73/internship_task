const express = require('express');
const router = express.Router();
const { add_items, fetch_items_by_category, delete_item_by_id, updateItem_status} = require('../../controller/grocery_category_items');
const authMiddleware = require('../../middleware/auth_middleware');

router.post('/add_item', authMiddleware, add_items)
router.get('/fetch_items/:categoryId', authMiddleware, fetch_items_by_category)
router.delete('/category/:itemId', authMiddleware, delete_item_by_id);
router.put('/items/:itemId/status', authMiddleware, updateItem_status);

module.exports = router;
