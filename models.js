const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    imageUrl: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    orders: [String]
});

const Product = mongoose.model('Product', ProductSchema);
const User = mongoose.model('User', UserSchema);

module.exports = { Product, User };