const express = require ("express");
const cors = require ("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config()
const router = require ("./route/routes")




const PORT = process.env.PORT || 5000
const app = express()

//middleware
app.use(cors())
app.use(express.json())


//mongoose Connection
mongoose
.connect(process.env.MONGO_URI)
.then(() =>{
    console.log("connected Successfully")
})
.catch((err) =>{
    console.log("error in connecting")
});

// route breakpoint api
app.use('/api', router)

//display on localhost screen response
app.get('/', (req, res) =>{
    res.send("Hello World")
})
app.listen (PORT, (req, res) =>{
    console.log(`Server is Listen ${PORT}`);
    
})