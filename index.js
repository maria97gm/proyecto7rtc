require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const academyRoutes = require('./src/api/routes/academy')
const danceRoutes = require('./src/api/routes/dance')
const userRoutes = require('./src/api/routes/user')

const app = express()
connectDB()

app.use(express.json())

app.use('/api/v1/academies', academyRoutes)
app.use('/api/v1/dances', danceRoutes)
app.use('/api/v1/users', userRoutes)

app.use('*', (req, res) => {
  res.status(404).json('Not Found')
})

app.listen(3000, () => {
  console.log('Para accerder al servidor haz click en: http://localhost:3000')
})
