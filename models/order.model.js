const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    restaurant_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    cart_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
    },
    status :{
      type: String,
      enum: ['Success', 'Pending' , ]
    },
    total_price: {
      type: Number,
      required: true,
    },
    date :{
      type: Date, default: Date.now()
    }
    
  },
  { timestamps: true }
);

exports.Order = mongoose.model("Order", orderSchema);
