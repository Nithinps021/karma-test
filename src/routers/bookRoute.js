const express = require("express");
const Books = require("../model/Books");

const bookRoute = express.Router();
bookRoute.use(express.json());

bookRoute
  .route("/")
  .all((req, res, next) => {
    res.setHeader("context-type", "application/json");
    next();
  })
  .post((req, res) => {
    Books.create(req.body)
      .then((book) => {
        return res.status(200).json(book);
      })
      .catch((err) => {
        return res.status(500).json(err.parent.sqlMessage);
      });
  })
  .get((req, res) => {
    Books.findAll()
      .then((books) => {
        if(books.length===0) {
          return res.status(200).json({message:"No books available"})
        }
        return res.status(200).json(books);
      })
      .catch((err) => {
        return res.status(500).json(err.parent.sqlMessage);
      });
  })
  .put((req, res) => {
    return res.status(403).json({ error: "PUT opertaion not allowed" });
  })

bookRoute
  .route("/:bookId")
  .all((req, res, next) => {
    res.setHeader("context-type", "application/json");
    next();
  })
  .get((req, res) => {
    let { bookId } = req.params;
    Books.findAll({
      where: {
        id: bookId,
      },
    })
      .then((book) => {
        if (book.length===0){
          return res.status(404).json({message:"Book Not Found"})
        }
        return res.status(200).json(book);
      })
      .catch((err) => {
        return res.status(500).json(err.parent.sqlMessage);
      });
  })
  .post((req, res) => {
    return res.status(403).json({ error: "POST operation not allowed" });
  })
  .put((req, res) => {
    let { bookId } = req.params;
    Books.update(req.body, {
      where: {
        id: bookId,
      },
    })
      .then(() => {
        return res
          .status(200)
          .json({
            status: "success",
            message: `Books with id ${bookId} was updated`,
          });
      })
      .catch((err) => {
        return res.status(404).json(err.parent.sqlMessage);
      });
  })
  .delete((req, res) => {
    let { bookId } = req.params;
    Books.destroy({
      where: {
        id: bookId,
      },
    })
      .then((book) => {
        return res.status(200).json({
          status: "success",
          obj: book,
          message: `Books with id ${bookId} was deleted`,
        });
      })
      .catch((err) => {
        return res.status(404).json(err.parent.sqlMessage);
      });
  });
  bookRoute.route('/author/:authorId')
  .get((req,res)=>{
    let{authorId} =req.params
    Books.findAll({
      where:{
        author_Id:authorId
      }
    })
    .then(books=>{
      if(books.length===0){
        return res.status(200).json({message:"No books found"})
      }
      return res.status(200).json(books)
    })
    .catch((err)=>{
      return res.status(400).json(err)
    })
  })
  
module.exports = bookRoute;
