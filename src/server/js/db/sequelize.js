const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const randomStringGenerator = require('../helpers/randomString');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/database.sqlite',
});

const Session = sequelize.define('Session', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    secret: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: 'Please provide a value for "Sessionname"',
            },
        },
    },
}, {
    hooks: {
        beforeCreate(session) {
            session.secret = randomStringGenerator(40);
        },
    },
});

const User = sequelize.define('User', {
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
            notEmpty: false,
        },
    },
    tosDateSigned: {
        type: Sequelize.DATE,
        allowNull: true,
        validate: {
            notEmpty: false,
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
});

User.prototype.validatePassword = (vaidate) => bcrypt.compare(vaidate, this.password);

Session.belongsTo(User);
User.hasMany(Session);

module.exports = sequelize;
