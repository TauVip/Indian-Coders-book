const express = require('express')
const Book = require('../models/Book')
const router = express.Router()
const booksController = require('../controllers/books-controller')

router.get('/', booksController.getAllBooks)
router.post('/', booksController.addBook)

module.exports = router
