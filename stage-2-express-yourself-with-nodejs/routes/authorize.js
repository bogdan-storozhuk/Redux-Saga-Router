var express = require('express');
var router = express.Router();

const {
    getVerifiedUser
} = require("../services/authorize.service");
const {
    isAuthorized
} = require("../middlewares/auth.middleware");

router.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3006');
 

   let userName =  req.query.userName;
    let password = req.query.password;

    if (!userName || !password){
        res.status(400).send(`Data is not valid`);
    }

    const {
        verified,
        result,
        isError
    } = getVerifiedUser(userName, password);

    if(isError){
        return res.status(500).send("Something went wrong on the server");
    }

    if(result){
      return  res.send(result);
    }

    if(verified){
       return res.status(401).send(`Unauthorized.Wrong input data`);
    }

    return res.status(401).send(`Unauthorized.Wrong input data`);

});
module.exports = router;