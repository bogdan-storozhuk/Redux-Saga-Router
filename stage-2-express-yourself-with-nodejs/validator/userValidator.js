class UserValidator {
    static validateUser(user) {
        const {
            id,
            name,
            email,
            password,
            role
        } = user;
        if (!id) {
            return {
                isValid: false,
                errorMessage: "id is not correct"
            };
        }

        if (!name) {
            return {
                isValid: false,
                errorMessage: "name is not correct"
            };
        }

        if (!email) {
            return {
                isValid: false,
                errorMessage: "email is not correct"
            };
        }

        if (!password) {
            return {
                isValid: false,
                errorMessage: "password is not correct"
            };
        }

        if (!role) {
            return {
                isValid: false,
                errorMessage: "role is not correct"
            };
        }

        return {
            isValid: true,
            errorMessage: null
        };
    }
}

module.exports = {
    UserValidator,
};