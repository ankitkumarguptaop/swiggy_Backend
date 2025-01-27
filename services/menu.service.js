const {menuModel} = require("../models");
const menu = menuModel.Menu;

exports.getAllMenu = async (payload) => {
     const {restaurant_id} =payload
  if (await menu.find({restaurant_id:restaurant_id})) {
    return await menu.find({restaurant_id:restaurant_id});
  } else {
    throw "Menu is not there";
  }
};

exports.getMenu = async (payload) => {
    const {id,restaurant_id} =payload
  if (await menu.findOne({ $and :[{_id:id},{restaurant_id:restaurant_id}]})) {
    return await menu.findOne({ $and :[{_id:id},{restaurant_id:restaurant_id}]});
  } else {
    throw "meue is not exist";
  }
};


exports.createMenu = async (payload) => {
    const { body,restaurant_id ,menuImagePath} = payload;
    const dish_name = body.dish_name;
    console.log(restaurant_id)
    const menuExist = await menu.findOne({$and :[{ dish_name:dish_name } ,{restaurant_id:restaurant_id}]});
    if (!menuExist) {
      const newMenu = new menu({...body ,restaurant_id:restaurant_id ,picture: menuImagePath});
      return await newMenu.save();
    } else {
      throw "Menu already exist!";
    }
};

exports.updateMenu = async (payload) => {
  const { body, id ,thisRestaurant } = payload;
  if (await menu.findById(id)  && await menu.findOne({$and :[{ _id: id },{restaurant_id:thisRestaurant._id}]})) {
    return await menu.findOneAndUpdate({ _id: id }, body, {
      returnDocument: "after",
    });
  } else {
    throw "you dont have access or menu doesnt exist";
  }
};

exports.deleteMenu = async (payload) => {
  const { id, thisRestaurant } = payload;
  if ( (await menu.findById(id))  && await menu.findOne({$and :[{ _id: id },{restaurant_id:thisRestaurant._id}]})) {
    return await menu.findOneAndDelete({ _id: id });
  } else {
    throw "you dont have access or meue doesnt exist";
  }
};
