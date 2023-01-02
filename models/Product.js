const mongoose = require("mongoose")
const validator = require("validator")

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a product name"],
      maxLength: [250, "Numele nu poate fi mai mult de 250 de caractere"],
      minLength: 3
    },
    price: {
      type: Number,
      required: [true, "Please provide a price"],
      default: 0
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
      maxLength: [250, "Descrierea nu poate fi mai mult de 1000 de caractere"]
    },
    image: {
      type: String,
      default: "/uploads/example.jpeg"
    },
    category: {
      type: String,
      required: [true, "Please provide a category"],
      enum: ["Saboti Medicali Leon Dama", "Saboti Medicali Medi+ Dama", "Saboti Medicali Leon Barbati", "Saboti Medicali Medi+ Barbati", "Incaltaminte de vara Leon", "Incaltaminte de vara Medi+"]
    },
    producator: {
      type: String,
      enum: {
        values: ["Leon", "Medi+"],
        message: "{VALUE} is not supported"
      }
    },
    colors: {
      type: [String],
      require: true
    },
    marimi: {
      type: [Number],
      required: true
    },
    featured: {
      type: Boolean,
      default: false
    },
    freeShipping: {
      type: Boolean,
      default: false
    },
    inventory: {
      type: Number,
      required: true,
      default: 0
    },
    avarageRating: {
      type: Number,
      default: 0
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Product", ProductSchema)
