const express = require('express')
const cookieParser=require("cookie-parser")
const bodyParser=require("body-parser")
const app = express()
const connectDatabase = require("./config/database");
const port = 3000
const user=require("../backend/routes/UserRoutes")


connectDatabase();
app.use(express.json())
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.json({
    'name':"aman",
    'lastname':"gupta"

  })
})
app.use("/app/v1", user);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
