const app = require("./app");
const dotenv = require("dotenv");
const databaseConnection = require("./db");

dotenv.config({path: "./.env"})
const port = process.env.PORT;

databaseConnection();

app.listen(port, () => {
    console.log(`server is up at port ${port}`);
})