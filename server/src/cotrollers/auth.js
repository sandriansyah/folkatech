const { User } = require("../../models");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const schema = joi.object({
      firstName: joi.string().min(3).required(),
      lastName: joi.string().min(3).required(),
      email: joi.string().email().min(8).required(),
      phone: joi.string().min(8).required(),
      password: joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).send({
        message: error.details[0].message,
      });
    }

    const checkEmail = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (checkEmail) {
      return res.send({
        status: "failed",
        message: "email already used",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const createUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
    });

    const dataToken = {
      id: createUser.id,
    };

    const SEKRET_KEY = process.env.TOKEN_KEY;
    const token = jwt.sign(dataToken, SEKRET_KEY);

    res.status(200).send({
      status: "success",
      data: {
        id: createUser.id,
        token,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

exports.signin = async (req, res) => {
  const schema = joi.object({
    email: joi.string().email().min(8).required(),
    password: joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send({
      message: error.details[0].message,
    });
  }

  try {
    const findingUser = await User.findOne({
      where: {
        email: req.body.email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    const comparePassword = await bcrypt.compare(
      req.body.password,
      findingUser.password
    );

    if (!comparePassword) {
      res.status(400).send({
        status: "failed",
        message: "your email and password is invalid",
      });
    }

    const dataToken = {
      id: findingUser.id,
    };

    const SEKRET_KEY = process.env.TOKEN_KEY;
    const token = jwt.sign(dataToken, SEKRET_KEY);

    res.status(200).send({
      data: {
        id: findingUser.id,
        firstName: findingUser.firstName,
        lastName: findingUser.lastName,
        email: findingUser.email,
        token,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};
