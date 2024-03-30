const mongoose = require("mongoose");

const databaseConnection = () => {
    mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
    .then((res) => console.log(`database is successfully connected with ${res.connection.host}`))
    .catch((error) => console.log(`DB ERROR----> ${error.message}`))
}

module.exports = databaseConnection;