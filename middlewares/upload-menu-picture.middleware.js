const multer =require("multer")



exports.uploadMenuPic =()=>{
  const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
         cb(null ,"uploads/menu.upload")
    },
    filename:(req,file,cb)=>{
     const suffix =Date.now();
     cb(null,suffix+"-"+file.originalname);
    }
  })
  const upload =multer({storage});
   return upload;
}