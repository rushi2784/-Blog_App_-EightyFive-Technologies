const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({

    title: { type: String, required: true },
    content: { type: String, required: true },
    img: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" }


}, {
    timestamps: true
})

const BlogModel = mongoose.model("blogs", blogSchema)


module.exports = BlogModel