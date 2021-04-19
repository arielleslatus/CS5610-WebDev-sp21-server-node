const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    role: {type: String, enum: ["ADMIN", "FACULTY", "STUDENT"]}
}, {collection: "users"})

module.exports = userSchema;