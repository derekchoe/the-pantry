const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name: { type: String, required: true, unique: true },
    image: {
        type: String,
        required: true,
    },
});

module.exports = Ingredient = mongoose.model("ingredient", IngredientSchema);
