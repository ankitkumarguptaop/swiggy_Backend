
const {cartItemModel} = require("../models");
const Item = cartItemModel.Item;

exports.getAllItems = async (payload) => {
if (!await Item.find({})) {
  throw ("Cart ID is required");
}
return await Item.find({});
};

exports.getItemsInCart = async (payload) => {
    const{cart_id}= payload
  if (!cart_id) {
    throw ("Cart ID is required");
  }
  return await Item.find({ cart_id });
};


exports.updateItemInCart = async (payload) => {
  const { item_id ,body} = payload;
  const{ quantity} =body
  if (!item_id) {
    throw ("Item ID is required");
  }
  const updatedItem = await Item.findByIdAndUpdate(
    item_id,
    { quantity },
    { new: true }
  );
  if (!updatedItem) {
    throw ("Item not found");
  }
  return updatedItem;
};

exports.deleteItemFromCart = async (payload) => {
  const {item_id} =payload;
  if (!item_id) {
    throw ("Item ID is required");
  }
  const deletedItem = await Item.findByIdAndDelete(item_id);
  if (!deletedItem) {
    throw ("Item not found");
  }
  return deletedItem;
};
