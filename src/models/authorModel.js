const mongoose = require('mongoose');

/*------------------------------------------Author Schema:-------------------------------------------*/
const authorSchema = new mongoose.Schema({

    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", " Miss"],
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }

}, { timestamps: true });


/*------------------------------------------Export Modules:-------------------------------------------*/
module.exports = mongoose.model('author', authorSchema)  // author