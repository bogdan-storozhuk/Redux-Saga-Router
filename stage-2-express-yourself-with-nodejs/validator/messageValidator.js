class MessageValidator {
    static validateMessage(message) {
        const {
            id,
            user,
            avatar,
            created_at,
            message : messageText,
        } = message;
        if (!id) {
            return {
                isValid: false,
                errorMessage: "id is not correct"
            };
        }

        if (!user) {
            return {
                isValid: false,
                errorMessage: "user is not correct"
            };
        }

        if (!avatar) {
            return {
                isValid: false,
                errorMessage: "avatar is not correct"
            };
        }

        if (!created_at) {
            return {
                isValid: false,
                errorMessage: "created_at is not correct"
            };
        }

        if (!messageText) {
            return {
                isValid: false,
                errorMessage: "messageText is not correct"
            };
        }

        return {
            isValid: true,
            errorMessage: null
        };
    }
}

module.exports = {
    MessageValidator,
};