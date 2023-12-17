const { Product } = require("../../models");

exports.addProduct = async (req, res) => {
  try {
    const createProduct = await Product.create({
      productName: req.body.productName,
      description: req.body.description,
      sku: req.body.sku,
      price: req.body.price,
    });

    res.status(200).send({
      data: createProduct.id,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

exports.getListProduct = async (req, res) => {
  try {
    const products = await Product.findAll();

    res.status(200).send({
      data: products,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).send({
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};
