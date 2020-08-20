const express = require("express");
const Reviews = require("../model/Review");

const reviewRoute = express.Router();
reviewRoute.use(express.json());

reviewRoute
  .route("/")
  .all((req, res, next) => {
    res.setHeader("context-type", "application/json");
    next();
  })
  .post((req, res) => {
    Reviews.create(req.body)
      .then((review) => {
        return res.status(200).json(review);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  })
  .get((req, res) => {
    Reviews.findAll({
      where:req.query
    })
      .then((reviews) => {
        if (reviews.length===0){
          return res.status(200).json({message:"No reviews found"})
        }
        return res.status(200).json(reviews);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  })
  .put((req, res) => {
    return res.status(403).json({ error: "PUT opertaion not allowed" });
  })
  .delete((req, res) => {
    Reviews.destroy({ truncate: true })
      .then((snap) => {
        return res.status(200).json({
          status: "success",
          message: "All rows are deleted",
          obj: snap,
        });
      })
      .catch((err) => {
        return res.status(500).json(err.parent.sqlMessage);
      });
  });

reviewRoute
  .route("/:reviewId")
  .all((req, res, next) => {
    res.setHeader("context-type", "application/json");
    next();
  })
  .get((req, res) => {
    let { reviewId } = req.params;
    Reviews.findAll({
      where: {
        id: reviewId,
      },
    })
      .then((review) => {
        return res.status(200).json(review);
      })
      .catch((err) => {
        return res.status(500).json(err.parent.sqlMessage);
      });
  })
  .post((req, res) => {
    return res.status(403).json({ error: "POST operation not allowed" });
  })
  .put((req, res) => {
    let { reviewId } = req.params;
    Reviews.update(req.body, {
      where: {
        id: reviewId,
      },
    })
      .then(() => {
        return res
          .status(200)
          .json({
            status: "success",
            message: `Reviews with id ${reviewId} was updated`,
          });
      })
      .catch((err) => {
        return res.status(404).json(err.parent.sqlMessage);
      });
  })
  .delete((req, res) => {
    let { reviewId } = req.params;
    Reviews.destroy({
      where: {
        id: reviewId,
      },
    })
      .then((review) => {
        return res.status(200).json({
          status: "success",
          obj: review,
          message: `Reviews with id ${reviewId} was deleted`,
        });
      })
      .catch((err) => {
        return res.status(404).json(err.parent.sqlMessage);
      });
  });

module.exports = reviewRoute;
