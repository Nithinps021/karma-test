const express = require("express");
const Author = require("../model/Author");

const authorRoute = express.Router();
authorRoute.use(express.json());

authorRoute
  .route("/")
  .all((req, res, next) => {
    res.setHeader("context-type", "application/json");
    next();
  })
  .post((req, res) => {
    Author.create(req.body)
      .then((user) => {
        return res.status(200).json(user);
      })
      .catch((err) => {
        let errMessage = err.errors[0];
        return res.status(500).json({ error: errMessage.message });
      });
  })
  .get((req, res) => {
    Author.findAll()
      .then((authors) => {
        return res.status(200).json(authors);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  })
  .put((req, res) => {
    return res.status(403).json({ error: "PUT opertaion not allowed" });
  })
  .delete((req, res) => {
    Author.destroy({ truncate: true })
      .then((users) => {
        return res.status(200).json({
          status: "success",
          message: "All rows are deleted",
          obj: users,
        });
      })
      .catch((err) => {
        let errMessage = err.errors[0];
        return res.status(500).json({ error: errMessage.message });
      });
  });

authorRoute
  .route("/:authorId")
  .all((req, res, next) => {
    res.setHeader("context-type", "application/json");
    next();
  })
  .get((req, res) => {
    let { authorId } = req.params;
    Author.findAll({
      where: {
        id: authorId,
      },
    })
      .then((author) => {
        return res.status(200).json(author);
      })
      .catch((err) => {
        let errMessage = err.errors[0];
        return res.status(500).json({ error: errMessage.message });
      });
  })
  .post((req, res) => {
    return res.status(403).json({ error: "POST operation not allowed" });
  })
  .put((req, res) => {
    let { authorId } = req.params;
    Author.update(req.body, {
      where: {
        id: authorId,
      },
    })
      .then((author) => {
        return res.status(200).json(author);
      })
      .catch((err) => {
        let errMessage = err.errors[0];
        return res.status(404).json({ error: errMessage.message });
      });
  })
  .delete((req, res) => {
    let { authorId } = req.params;
    Author.destroy({
      where: {
        id: authorId,
      },
    }).then((user) => {
      return res
        .status(200)
        .json({
          status: "success",
          obj: user,
          message: `Author with id ${authorId} was deleted`,
        })
    })
    .catch(err=>{
      let errMessage = err.errors[0];
      return res.status(404).json({ error: errMessage.message });
    })
  });

module.exports = authorRoute;
