// Required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const connectToMongoose = require('./db/db');
connectToMongoose();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Auth routes
const authRoutes = require('./Routes/auth_routes/auth_routes');
const groceryRoutes = require('./Routes/grocery_routes/grocery_routes');
const itemsRoutes = require('./Routes/items_routes/items_routes');
app.use('/api/auth', authRoutes);
app.use('/api/grocery', groceryRoutes);
app.use('/api/grocery-category', itemsRoutes);

const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});