const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Hemos podido conectar con la BBDD, seguimossss')
  } catch (error) {
    console.log('No hemos podido conectarnos a la BBDD')
  }
}

module.exports = { connectDB }
