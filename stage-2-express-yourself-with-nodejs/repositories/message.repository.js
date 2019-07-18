const fs = require('fs');

const saveMessages = (messages) => {
    // код по сохранению данных в БД
    if (messages) {
        fs.writeFile("messageList.json", JSON.stringify(messages), (error) => {
            if (error) {
                return false;
            }
        });

        return true;
    } else {
        return false;
    }
}

const getMessages = () => {
    try {
        const jsonResult = fs.readFileSync('messageList.json');
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
    saveMessages,
    getMessages
};