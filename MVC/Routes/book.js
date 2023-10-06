const express=require('express')
const router=express.Router()
const bookController=require('../controller/books')


router.get("/book",bookController.handleGetAllBooks)
router.get("/book/:bookId",bookController.handleGetBookById)
router.post("/book",bookController.handleAddBookById)
router.delete("/book/:bookId",bookController.handleDeleteBookById)

module.exports=router