const mongoose = require('mongoose');

// Tea Schema
const TeaSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    keywords: [String],
    origin: String,
    brew_time: String,
    temperature: String,
    comments: [{ text: String, date: Date }]
}, { collection: 'tea_collection' });
    
// User Schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
}, { collection: 'users' });

// Export both models
const Tea = mongoose.model('Tea', TeaSchema);
const User = mongoose.model('User', UserSchema);

module.exports = { Tea, User };
