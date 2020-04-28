const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    image: {
        type: String,
        required: true,
    },
    time: {
        hours: {
            type: Number,
        },
        minutes: {
            type: Number,
        },
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: [
        {
            ingredient: {
                type: Schema.Types.ObjectId,
                ref: "ingredients",
            },
            amount: {
                type: Number,
                required: true,
            },
            unit: {
                type: String,
                required: true,
            },
        },
    ],
    steps: [
        {
            stepNumber: { type: Number },
            description: { type: String, required: true },
            image: { type: String },
        },
    ],
    date: {
        type: Date,
        default: Date.now,
    },
    rating: [
        {
            user: {
                type: Schema.Types.ObjectId,
                refs: "users",
            },
            rating: {
                type: Number,
                min: 0,
                max: 5,
            },
            difficulty: {
                type: Number,
                min: 0,
                max: 5,
            },
            comment: { type: String, required: true },
            date: { type: Date, default: Date.now },
        },
    ],
    video: {
        type: String,
    },
});

module.exports = Recipe = mongoose.model("recipe", RecipeSchema);
