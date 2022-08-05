const express = require('express')
const app = express()
const connectDatabase = require("./config/database");
const port = 4000
const user=require("../backend/routes/UserRoutes")

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});


// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/.env" });
}





//connecting database
connectDatabase();


const server = app.listen(port, () => {
  console.log(`Server is working on http://localhost:4000}`);
});
// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});

app.get('/', (req, res) => {
  res.json({
    'name':"aman",
    'lastname':"gupta"

  })
})
