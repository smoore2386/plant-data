const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: String,
    meta: {
	age: Number,
	website: String
    },
    created_at: Date,
    updated_at: Date,
    plants: []
});
