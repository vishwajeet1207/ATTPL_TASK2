require('dotenv').config();
module.exports={
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PASSWORD
}
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('task2', 'root', 'satara', {
//   host: 'localhost',
//   dialect: 'mysql',
//   // other options
// });

// module.exports = sequelize;
