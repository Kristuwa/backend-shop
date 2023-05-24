const express = require("express");

const router = express.Router();
const { validation, ctrlWrapper } = require("../../middlewares");
const {
  schema: { joiAddSchema },
} = require("../../models/order");
const { orders: ctrl } = require("../../controllers");

router.post(
  "/",
  validation(joiAddSchema, "missing required name field"),
  ctrlWrapper(ctrl.addToBasket)
);

module.exports = router;
