const {
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


const getVerifiedUser = (userName,password) => {
 
      const {
        isError,
        result: users
      } = getAllUsers();

      if (isError) {
        return {
         isError:true,
        };
    }

      const userInDB = users.find(user => user.name === userName);
      if (userInDB && userInDB.password === password) {
        return {
          verified:true,
          result: userInDB,
        };
      }
    

      if (userInDb){
      return {
        verified:true,
        result: null,
      };
    }

    return {
        verified:false,
        result: null
      };
  };
  module.exports = {
    getVerifiedUser
  };