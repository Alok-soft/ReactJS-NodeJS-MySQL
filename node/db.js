const mysql = require("mysql")


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "site1",
});


db.connect((err) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      console.log("connected to MySQL Database");
    }
});



module.exports = {
    db
}