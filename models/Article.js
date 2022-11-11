import mongoose from "mongoose";
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    content: String
},{timestamps:true});

module.exports = mongoose.model( "Article", articleSchema );