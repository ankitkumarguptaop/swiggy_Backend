const { cartItemServices } = require("../services");

// exports.addItemToCart = async (req, res) => {
//   try {
//     const newItem = await cartItemServices.addItemToCart({body:req.body});
//     res.json(newItem);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to add item to cart", error: error });
//   }
// };

exports.getAllItems = async (req, res) => {
  try {
    const items = await cartItemServices.getAllItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch items in cart", error: error });
  }
};

exports.getItemsInCart = async (req, res) => {
  try {
    const items = await cartItemServices.getItemsInCart({cart_id:req.params.cart_id});
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch items in cart", error: error });
  }
};

exports.updateItemInCart = async (req, res) => {
  try {
    const updatedItem = await cartItemServices.updateItemInCart({
      item_id: req.params.item_id,
      body:req.body
    });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to update item in cart", error: error });
  }
};

exports.deleteItemFromCart = async (req, res) => {
  try {
    const deletedItem = await cartItemServices.deleteItemFromCart({item_id:req.params.item_id});
    res.json(deletedItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete item from cart", error: error });
  }
};
