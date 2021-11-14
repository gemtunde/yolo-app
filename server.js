const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();

//import route
//const courseRoute = require("./routes/courses")

/* Bodyparser Middleware */
app.use(express.json());

/* Load env */
dotenv.config({ path: "./config.env" });

//* Log rout actions
if (process.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

/* Use Routes  
change course to token category later */
app.use('/api/course',  require("./routes/courses"));



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
