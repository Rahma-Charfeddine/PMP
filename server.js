const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
require("dotenv").config({ path: ".env" });


const app = express()

app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.DBURI)



const userroutes = require("./routes/user.routes")
const periodroutes = require("./routes/period.routes")
// const processroutes = require("./routes/process.routes")
// const subprocessroutes = require("./routes/subprocess.routes")
// const indicatorroutes = require("./routes/indicator.routes")
// const responsibilitiesroutes = require("./routes/responsablilities.routes")
// const mEvalroutes = require("./routes/mEval.routes")
// const inputroutes = require("./routes/input.routes")
// const addInputroutes = require("./routes/addInput.routes")



app.use("/user", userroutes)
app.use("/period", periodroutes)
// app.use("/process",  processroutes)
// app.use("/subprocess",subprocessroutes)
// app.use("/indicator", indicatorroutes)
// app.use("/responsiblities", responsibilitiesroutes)
// app.use("/mEval",  mEvalroutes)
// app.use("/input", inputroutes)
// app.use("/addInput", addInputroutes)





app.listen(process.env.PORT, () => {
    console.log("app is running successfully on port : " + process.env.PORT);
    console.log("http://127.0.0.1:" + process.env.PORT);
})