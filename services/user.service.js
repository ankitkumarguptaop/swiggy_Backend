const {userModel} = require("../models");
const users = userModel.User;
const ObjectID = require("mongodb").ObjectId

exports.getAllUsers = async () => {

    if(await users.find({})){
        return await users.find({});
    }
    else{
        throw ("User is not there")
    }
};

exports.getUser = async (payload) => {
    const {id}=payload
     if(await users.findById(id)){
         return await users.findById(id);
     }
     else{
        throw ("user not registered")
     }
};


exports.updateUser = async (payload) => {
   let{body,id ,thisUser} =payload;
   id =new ObjectID(id)
    if( await users.findById(id) && (id).equals(thisUser._id)){
        return await users.findOneAndUpdate({ _id: id }, body, {
            returnDocument: "after",
          });
    }
    else{
        throw("you dont have access or user doesnt exist")
    }
};

exports.deleteUser = async (req, res) => {
    let{id ,thisUser} =payload;
    id =new ObjectID(id)
    if(await users.findById(id) && (id).equals(thisUser._id)){
        return await users.findOneAndDelete({ _id: id });
     }
    else{
        throw("you dont have access or user doesnt exist")
     }
};
