const mongoose = require('mongoose');

const PetsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is requered'],
        minlength: [3, 'Length must be at least 3 characters']
    },
    type:{
        type: String,
        required: [true, 'Type is requered'],
        minlength: [3, 'Length must be at least 3 characters']
    },
    description:{
        type: String,
        required: [true, 'Description is requered'],
        minlength: [3, 'Length must be at least 3 characters']
    },
    skill:{
        1:{
            type: String,
        },
        2:{
            type: String,
        },
        3:{
            type: String,
        }
    }

},{timestamps:true})

module.exports.Pets = mongoose.model('Pets', PetsSchema)