const mongoose = require('mongoose');

const auth_schema = mongoose.Schema({
    Full_Name:{
        type : String,
        required: true
    },
    Email_Address:{
        type : String,
        required: true
    },
    Password:{
        type: String,
        required: true
    },
    Confirm_Password:{
        type: String,
    }
},
    {
        timestamps : true
    }
);
const usermodel = mongoose.model('User-authentication', auth_schema)
module.exports = usermodel;