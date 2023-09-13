const express = require('express')
const { Sequelize } = require('sequelize');

const cors = require('cors')
const app = express()
const port = 3000

// Autoriser les requêtes provenant de http://localhost:5173
app.use(cors(
  { origin: 'http://localhost:5173' }
))

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})