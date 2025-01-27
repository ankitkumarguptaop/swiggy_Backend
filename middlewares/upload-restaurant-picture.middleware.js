const multer =require("multer")



exports.uploadRestaurantPic =()=>{
  const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
         cb(null ,"uploads/restaurants.upload")
    },
    filename:(req,file,cb)=>{
     const suffix =Date.now();
     cb(null,suffix+"-"+file.originalname);
    }
  })
  const upload =multer({storage});
   return upload;
}