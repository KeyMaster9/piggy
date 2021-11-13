const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'movies.db'
});



//declaring the async IIFE
(async () => {
    await sequelize.sync({ force: true });

    try {

    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
})();