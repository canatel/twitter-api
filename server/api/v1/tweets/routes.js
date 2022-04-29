const express = require("express");
// eslint-disable-next-line
const router = express.Router();

const controller = require("./controller");

/**
 * /api/v1/tweets       POST    Create
 * /api/v1/tweets       GET     Read all
 * /api/v1/tweets/:id   GET     Read
 * /api/v1/tweets/:id   PUT     Update
 * /api/v1/tweets/:id   DELETE  Delete
 *
 */

router.route("/").post(controller.create).get(controller.all);

router
  .route("/:id")
  .get(controller.read)
  .put(controller.update)
  .patch(controller.update)
  .delete(controller.delete);

module.exports = router;
