const dotenv = require("dotenv");
const express =require("express")
dotenv.config();
const cors = require("cors");
const bodyParser =require("body-parser")
const cookieParser = require('cookie-parser')

require("./configs/db")()

const app =express();
app.use(bodyParser.json())
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.static('public'));
app.use(express.json());

app.use( "/",require("./routes"))

const PORT =process.env.APP_PORT;
app.listen( PORT,()=>{
    console.log("app started" ,PORT);
})