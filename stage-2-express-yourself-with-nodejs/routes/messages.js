var express = require('express');
var router = express.Router();

const {
  getAllMessages,
  getMessageById,
  changeMessageById,
  addMessage,
  deleteMessageById
} = require("../services/message.service");
const {
  isAuthorized
} = require("../middlewares/auth.middleware");

const {
    MessageValidator
} = require("../validator/messageValidator");

router.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3006');
  const {
    isError,
    result
  } = getAllMessages();
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
  } = getMessageById(req.params.id);
  if (isNotFound) {
    res.status(404).send(`Message not found`);
  }

  if (isError || !result) {
    return res.status(500).send("Something went wrong on the server");
  }

  res.send(result);
});

router.delete('/:id', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3006');
  if (!req.params.id) {
    res.status(400).send(`Data is not valid`);
  }

  const {
    isSuccess,
    isNotFound
  } = deleteMessageById(req.params.id);

  if (isNotFound) {
    res.status(404).send(`Message not found`);
  }

  if (!isSuccess) {
    return res.status(500).send("Something went wrong on the server");
  }

  res.send("Message was removed successfully");
});

router.put('/:id', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const {
    isValid,
    errorMessage
  } = MessageValidator.validateMessage(req.body);
  if (!isValid) {
    res.status(400).send(errorMessage);
  }

  if (!req.params.id) {
    res.status(400).send(`Data is not valid`);
  }

  const {
    isSuccess,
    isNotFound
  } = changeMessageById(req.params.id, req.body);
  if (isNotFound) {
    res.status(404).send(`Message not found`);
  }

  if (!isSuccess) {
    return res.status(500).send("Something went wrong on the server");
  }

  res.send("Message was changed successfully");
});

router.post('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3006');
 
  if (req.body.message == null && req.body.message == undefined) {
    return res.status(400).send(`Data is not valid`);
  }

  console.log(req.body.message);

  const {
    isTheSameMessageExist,
    isSuccess
  } = addMessage(req.body.message);
  if (isTheSameMessageExist) {
    res.status(400).send(`Message with the same id exists`);
  }

  if (!isSuccess) {
    return res.status(500).send("Something went wrong on the server");
  }

  res.send("Message was saved successfully");
});
module.exports = router;