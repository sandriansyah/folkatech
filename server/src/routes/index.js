const express = require("express");

const router = express.Router();

const { register, signin } = require("../cotrollers/auth");
const {
  getListProduct,
  getProduct,
  addProduct,
} = require("../cotrollers/product");

router.post("/register", register);
router.post("/signin", signin);

router.post("/products/add", addProduct);
router.get("/products", getListProduct);
router.get("/products/:id", getProduct);

module.exports = router;
