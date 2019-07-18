const fs = require('fs');

const saveUsers = (users) => {
  // код по сохранению данных в БД
  if (users) {
    fs.writeFile("userlist.json", JSON.stringify(users), (error) => {
      if (error) {
        return false;
      }
    });

    return true;
  } else {
    return false;
  }
}

const getUsers = () => {
  try {
    const jsonResult = fs.readFileSync('userlist.json');
    const result = JSON.parse(jsonResult);
    return {
      isError: false,
      result
    };
  } catch (error) {
    console.log(error);
    return {
      isError: true
    };
  }
};

module.exports = {
  saveUsers,
  getUsers
};