const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
require("dotenv").config({ path: ".env" });
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.DBURI)

const userroutes = require("./routes/user.routes");
const periodroutes = require("./routes/period.routes");
const processroutes = require("./routes/process.routes");
const subprocessroutes = require("./routes/subprocess.routes");
const responsibilitiesroutes = require("./routes/responsabilities.routes");
const mEvalroutes = require("./routes/evaluation.routes");
const inputroutes = require("./routes/input.routes");
const addInputroutes = require("./routes/addInput.routes");
const indicatorroutes = require("./routes/indicator.routes");
const elementroutes = require("./routes/element.routes");
const chartsroutes = require("./routes/chart.routes");
const authroutes = require("./routes/auth.routes");

app.use("/user", userroutes)
app.use("/period", periodroutes)
app.use("/process", processroutes)
app.use("/subprocess", subprocessroutes)
app.use("/indicator", indicatorroutes)
app.use("/responsiblities", responsibilitiesroutes)
app.use("/mEval", mEvalroutes)
app.use("/input", inputroutes)
app.use("/addInput", addInputroutes)
app.use("/element", elementroutes)

app.use("/charts", chartsroutes)

app.use("/auth", authroutes)





app.listen(process.env.PORT, () => {
    console.log("app is running successfully on port : " + process.env.PORT);
    console.log("http://127.0.0.1:" + process.env.PORT);
})


/*The code requires necessary modules such as express, mongoose, cookie-parser, dotenv, and cors.
The Express application is created using express() and assigned to the app constant.

The cors() middleware is used to enable Cross-Origin Resource Sharing, allowing the server to handle requests from different origins.

The express.json() middleware is used to parse JSON request bodies.

The cookie-parser middleware is used to parse cookies from incoming requests.

The mongoose.connect() function is called to establish a connection to the MongoDB database. The connection URI is retrieved from the .env file using dotenv.config().

The code requires various route modules for different endpoints. 
These route modules define the logic for handling requests and responses related to specific resources or entities.*/