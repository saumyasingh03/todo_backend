const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT||4000;

//middleware to parse json request body

app.use(express.json());

// import routes for todod api
const todoRoutes=require("./routes/todo");

//mount the todo ASPI routes

app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`);
})

//connect to the database
const dbConnect=require("./config/database");
dbConnect();

//default Route

app.get("/",(req,res)=>{
    res.send(`<h1>this is home page baby</h1>`);
})