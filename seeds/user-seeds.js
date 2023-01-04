const { User } = require("../models");

const userData = [
  {
    username: "Rachel",
    password: "password12345",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

const router = require("express").Router();
const { User } = require("../../model");
