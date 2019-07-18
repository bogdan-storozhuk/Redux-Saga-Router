var express = require('express');
var router = express.Router();

const {
  getAllUsers,
  getUserById,
  changeUserById,
  addUser,
  deleteUserById
} = require("../services/user.service");
const {
  isAuthorized
} = require("../middlewares/auth.middleware");

const {
  UserValidator
} = require("../validator/userValidator");

router.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3006');
  const {
    isError,
    result
  } = getAllUsers();
  if (isError || !result) {
    res.status(500).send(`Something went wrong on the server`);
  }

  res.send(result);
});


router.get('/:id', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3006');
  if (!req.params.id) {
    res.status(400).send(`Data is not valid`);
  }

  const {
    isError,
    isNotFound,
    result
  } = getUserById(req.params.id);
  if (isNotFound) {
    res.status(404).send(`User not found`);
  }

  if (isError || !result) {
    return res.status(500).send("Something went wrong on the server");
  }

  res.send(result);
});

router.delete('/:id', function (req, res) {
  if (!req.params.id) {
    res.status(400).send(`Data is not valid`);
  }

  const {
    isSuccess,
    isNotFound
  } = deleteUserById(req.params.id);

  if (isNotFound) {
    res.status(404).send(`User not found`);
  }

  if (!isSuccess) {
    return res.status(500).send("Something went wrong on the server");
  }

  res.send("User was removed successfully");
});

router.put('/:id', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const {
    isValid,
    errorMessage
  } = UserValidator.validateUser(req.body);
  if (!isValid) {
    res.status(400).send(errorMessage);
  }

  if (!req.params.id) {
    res.status(400).send(`Data is not valid`);
  }

  const {
    isSuccess,
    isNotFound
  } = changeUserById(req.params.id, req.body);
  if (isNotFound) {
    res.status(404).send(`User not found`);
  }

  if (!isSuccess) {
    return res.status(500).send("Something went wrong on the server");
  }

  res.send("User was changed successfully");
});

router.post('/', function (req, res) {
  if (!req.body) {
    res.status(400).send(`Data is not valid`);
  }

  const {
    isTheSameUserExist,
    isSuccess
  } = addUser(req.body);
  if (isTheSameUserExist) {
    res.status(400).send(`User with the same id exists`);
  }

  if (!isSuccess) {
    return res.status(500).send("Something went wrong on the server");
  }

  res.send("User was saved successfully");
});
module.exports = router;