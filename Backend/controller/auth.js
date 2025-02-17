const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/Auth/auth");
const { validationResult } = require('express-validator');

// singup logic
const signup_controller = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { Full_Name, Email_Address, Password, Confirm_Password } = req.body;
  if (Password !== Confirm_Password) {
    return res.status(400).json({success:false, message: "Passwords do not match." });
  }
  try {
    const find_user = await User.findOne({ Email_Address });
    if (find_user) {
      return res.status(409).json({ success:false, message: "Email already in use." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Password, salt);
    const newUser = new User({
      Full_Name,
      Email_Address,
      Password: hashedPassword,
    });
    await newUser.save()
    res.status(201).json({success:true, message: "User registered successfully",});
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};


// login logic
const login_controller = async (req, res) => {
  const { Email_Address, Password } = req.body;
  try {
    const user = await User.findOne({ Email_Address });
    if (!user) {
      return res.status(401).json({success:false, message: "Invalid credentials." });
    }
    const pass_match = await bcrypt.compare(Password, user.Password);
    if (!pass_match) {
      return res.status(401).json({success:false, message: "Invalid credentials." });
    }
    const payload = {
      user: {
        id: user._id
      }
    };
    const token = jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: '1h' }
    );
    res.status(200).json({success:true, message: "User logged in successfully", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { signupController: signup_controller,loginController: login_controller};