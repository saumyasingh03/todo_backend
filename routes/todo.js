const express=require("express");
const router=express.Router();

//import controler
const {createTodo}=require("../controllers/createTodo");
const {getTodo}=require("../controllers/getTodo");
const { getTodobById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

//define api routes
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodobById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);


module.exports=router;