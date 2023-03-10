const mongoose = require("mongoose")

const SingleOrderItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: true
  }
})

const OrderSchema = mongoose.Schema(
  {
    tax: {
      type: Number,
      required: true
    },
    shippingFee: {
      type: Number,
      required: true
    },
    subtotal: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    orderItems: [SingleOrderItemSchema], //schema creata mai sus pentru a verifica daca ce vine de la frontend e corect
    status: {
      type: String,
      enum: ["pending", "complete", "paid", "delivered", "cancelled", "suspended"],
      default: "pending"
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true
    },
    clientSecret: {
      type: String,
      required: true
    },
    paymentIntentId: {
      type: String
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Order", OrderSchema)
