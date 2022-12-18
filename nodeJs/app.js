const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/json', (req, res) => {
    res.json({
        'name':"aman",
        'deree':"b.tech"
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log("node js tuts ")
require("dotenv").config();
console.log(process.env.NAME);
console.log(process.env.PROFESSION);

