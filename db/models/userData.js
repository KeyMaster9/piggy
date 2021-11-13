const Sequelize = require('sequelize');

//starts the user database:
class User extends Sequelize.Model {}
User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please accept "TOS"',
            },
        },
    },
    tosVersionSigned: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    tosDateSigned: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    primaryDataOwned: {
        type: Sequelize.ARRAY,
        allowNull: true,
        validate: {
            notEmpty: false,
        },
    },
    secondaryDataOwned: {
        type: Sequelize.ARRAY,
        allowNull: true,
        validate: {
            notEmpty: false,
        },
    },
}, { sequelize });