const {
  saveUsers,
  getUsers
} = require("../repositories/user.repository");

const getAllUsers = () => {
  return getUsers();
}
var express = require('express');
var cors = require('cors');
var app = express();

//allow OPTIONS on just one resource
app.options('/the/resource/you/request', cors());

//allow OPTIONS on all resources
app.options('*', cors());

const getUserById = (id) => {
  if (id) {
    const {
      isError,
      result: users
    } = getUsers();
    if (isError) {
      return {
        isError: true,
        isNotFound: false,
        result: null
      };
    }

    let result = users.find(item => item.id === id);
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

const changeUserById = (id, user) => {
  if (id, user) {
    const {
      isError,
      result: users
    } = getUsers();
    if (isError) {
      return {
        isSuccess: false,
        isNotFound: false
      };
    }

    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
      return {
        isSuccess: false,
        isNotFound: true
      };
    }

    users[index] = user;
    const isSaved = saveUsers(users);
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

const addUser = (user) => {
  if (user) {
    const {
      isError,
      result: users
    } = getUsers();

    if (isError) {
      return {
        isTheSameUserExist: false,
        isSuccess: false
      };
    }

    if (users.find(item => item.id === user.id)) {
      return {
        isTheSameUserExist: true,
        isSuccess: false
      };
    }

    users.push(user);
    const isSaved = saveUsers(users);
    return {
      isTheSameUserExist: false,
      isSuccess: isSaved
    };
  }

  return {
    isTheSameUserExist: false,
    isSuccess: false
  };
};
const deleteUserById = (id) => {
  if (id) {
    const {
      isError,
      result: users
    } = getUsers();
    if (isError) {
      return {
        isSuccess: false,
        isNotFound: false
      };
    }

    const isUserExist = users.find(item => item.id === id);
    if (!isUserExist) {
      return {
        isSuccess: false,
        isNotFound: true
      };
    }

    const filteredUsers = users.filter(item => item.id !== id);
    const isSaved = saveUsers(filteredUsers);
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
  getAllUsers,
  getUserById,
  changeUserById,
  addUser,
  deleteUserById
};