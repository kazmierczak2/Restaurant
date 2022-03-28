const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    content: [{
            nameDish:{
                type: String
            },
            name: {
                type: String
            },
            price: {
                type: String
            }

    }],
    tableNum: {
        type:String,
        required: true
    },
    status: {
            type:String,
            required: true
    }
});

const Order = mongoose.model('Order', orderSchema)
module.exports = Order;