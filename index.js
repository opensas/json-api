const express = require("express");
const app = express()
const plan = require("./api/plan")
const api = require("./api/index")

app.use(express.json({extended: false}))

app.use('/api/plan', plan)
app.use('/', api)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
})