const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('emplyoeedata', 'root', 'princejain', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('connection is successful');
})
    .catch(err => {
        console.error('unable to connect database', err);
    });

module.exports = sequelize;    