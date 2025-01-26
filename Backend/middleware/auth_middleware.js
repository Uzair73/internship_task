const jwt = require('jsonwebtoken');
const User = require('../models/Auth/auth');

const authMiddleware = async (req, res, next) => {
    try {
        const auth_Header = req.headers.authorization;
        if (!auth_Header) {
            return res.status(403).json({ success: false, message: "Authorization header is missing" })
        }
        const token = auth_Header.split(' ')[1];
        if (!token) {
            return res.status(403).json({ success: false, message: "A token is required for authentication" })
        }
        const decoded = jwt.verify(token, process.env.SECRET)
        console.log("Decoded token:", decoded)
        const userId = decoded.user.id
        const user = await User.findById(userId)
        // console.log("User found:", user)
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid token" })
        }
        req.user = user;
        next()
    } catch (error) {
        console.error("Token verification error:", error)
        return res.status(401).json({ suceess:false, message: error.message })
    }
};

module.exports = authMiddleware