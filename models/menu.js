const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({

    category: {
        type:String,
        required: true
    },
    name: {
        type:String,
        required: true
    },
    price: {
        type:String,
        required: true
    }
});

const Menu = mongoose.model('Menu',MenuSchema);
module.exports = Menu;