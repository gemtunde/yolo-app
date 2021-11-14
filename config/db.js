const mysql = require("mysql");

var db;
connectDatabase = () => {
  if (!db) {
    db = mysql.createConnection({
      // host: process.env.DBHOST,
      // database: process.env.DBNAME,
      // user: process.env.DBUSER,
      // password: "",
      host: "127.0.0.1",
      user: "root",
     // password: "5747723",
      database: "yolo"
    });
    db.connect(function (err) {
      // if (!err) {
      //   console.log("Database is connected!");
      // } else {
      //   console.log("Error connecting database!");
      // }
      if (err) throw err;
      console.log("Connected!");
    });
  }
  return db;
};
module.exports = connectDatabase();
