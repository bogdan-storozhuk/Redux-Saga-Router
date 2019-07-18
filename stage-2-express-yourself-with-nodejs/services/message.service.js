const {
    saveMessages,
    getMessages
  } = require("../repositories/message.repository");
  
  const getAllMessages = () => {
    return getMessages();
  }

  var express = require('express');
  var cors = require('cors');
  var app = express();
  //allow OPTIONS on just one resource
  app.options('/the/resource/you/request', cors());
  //allow OPTIONS on all resources
  app.options('*', cors());
  
  const getMessageById = (id) => {
    if (id) {
      const {
        isError,
        result: messages
      } = getMessages();
      if (isError) {
        return {
          isError: true,
          isNotFound: false,
          result: null
        };
      }
  
      let result = messages.find(item => item.id === id);
      if (!result) {
        return {
          isError: false,
          isNotFound: true,
          result: null
        };
      }
  
      return {
        isError: false,
        isNotFound: false,
        result
      };
    }
  
    return {
      isError: true,
      isNotFound: false,
      result: null
    };
  };
  
  const changeMessageById = (id, message) => {
    if (id, message) {
      const {
        isError,
        result: messages
      } = getMessages();
      if (isError) {
        return {
          isSuccess: false,
          isNotFound: false
        };
      }
  
      const index = messages.findIndex(message => message.id === id);
      if (index === -1) {
        return {
          isSuccess: false,
          isNotFound: true
        };
      }
  
      messages[index] = message;
      const isSaved = saveMessages(messages);
      if (!isSaved) {
        return {
          isSuccess: false,
          isNotFound: false
        };
      }
  
      return {
        isSuccess: true,
        isNotFound: false
      };
    }
  
    return {
      isSuccess: false,
      isNotFound: false
    };
  };
  
  const addMessage = (message) => {
    if (message) {
      const {
        isError,
        result: messages
      } = getMessages();
  
      if (isError) {
        return {
          isTheSameMessageExist: false,
          isSuccess: false
        };
      }
  
      if (messages.find(item => item.id === message.id)) {
        return {
          isTheSameMessageExist: true,
          isSuccess: false
        };
      }
  
      messages.push(message);
      const isSaved = saveMessages(messages);
      return {
        isTheSameMessageExist: false,
        isSuccess: isSaved
      };
    }
  
    return {
      isTheSameMessageExist: false,
      isSuccess: false
    };
  };
  const deleteMessageById = (id) => {
    if (id) {
      const {
        isError,
        result: messages
      } = getMessages();
      if (isError) {
        return {
          isSuccess: false,
          isNotFound: false
        };
      }
  
      const isMessageExist = messages.find(item => item.id == id);
      if (!isMessageExist) {
        return {
          isSuccess: false,
          isNotFound: true
        };
      }
  
      const filteredMessages = messages.filter(item => item.id != id);
      const isSaved = saveMessages(filteredMessages);
      if (!isSaved) {
        return {
          isSuccess: false,
          isNotFound: false
        };
      }
  
      return {
        isSuccess: true,
        isNotFound: false
      };
    }
  
    return {
      isSuccess: false,
      isNotFound: false
    };
  };
  module.exports = {
    getAllMessages,
    getMessageById,
    changeMessageById,
    addMessage,
    deleteMessageById
  };