const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, "Please provide a rating"]
    },
    title: {
      type: String,
      trim: true,
      required: [true, "Please provide a title"],
      maxlength: 100
    },
    comment: {
      type: String,
      required: [true, "Please provide a review text"]
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: true
    }
  },
  { timestamps: true }
)

ReviewSchema.index({product : 1 , user : 1} , {unique: true})  //Sa indexam reviewurile si sa le facem unice incat un user sa nu poate las mai mult de un raiting per produs


module.exports = mongoose.model("Reviews", ReviewSchema)
