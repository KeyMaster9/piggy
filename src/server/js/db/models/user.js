const { Sequelize } = require('sequelize');
const sequelize = require('../sequelize');

//starts the user database:
class User extends Sequelize.Model { }
User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: 'Please provide a value for "Username"',
            },
        },

    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please provide a value for "Password"',
            },
        },
    },
    forename: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please provide a value for "Forename"',
            },
        },
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please provide a value for "Surname"',
            },
        },
    },
    emailAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: 'Please provide a value for "Email Address"',
            },
        },
    },
    tosSigned: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please accept "TOS"',
            },
        },
    },
    tosVersionSigned: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
        },
    },
    tosDateSigned: {
        type: Sequelize.DATE,
        allowNull: true,
        validate: {
            notEmpty: true,
        },
    },
    primaryDataOwned: {
        type: Sequelize.JSON,
        defaultValue: {},
        allowNull: true,
        validate: {
            notEmpty: false,
        },
    },
    secondaryDataOwned: {
        type: Sequelize.JSON,
        defaultValue: {},
        allowNull: true,
        validate: {
            notEmpty: false,
        },
    },
}, {
    sequelize,
    modelName: 'User'
});

module.exports = User;