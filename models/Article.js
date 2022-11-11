import mongoose from "mongoose";


const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    content: String,
    slug: { type: String, unique: true }
}, { timestamps: true }
);

export default mongoose.models.Article || mongoose.model("Article", articleSchema)