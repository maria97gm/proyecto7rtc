require('dotenv').config()
const mongoose = require('mongoose')
const Dance = require('../api/models/dance')

const dances = [
  {
    name: "Comercial",
    date: "M-J",
    duration: 90
  },
  {
    name: "Hip - Hop",
    date: "L-X-V",
    duration: 60
  },
  {
    name: "Contemporáneo",
    date: "V",
    duration: 120
  },
  {
    name: 'Ballet',
    date: 'L-X-V',
    duration: 60
  },
  {
    name: 'Salsa',
    date: 'M-J',
    duration: 90
  },
  {
    name: 'Twerk',
    date: 'V',
    duration: 120
  }
]

mongoose.connect(process.env.DB_URL).then(async () => {

  try {
    await Dance.insertMany(dances)
    console.log('Se han insertado los datos de la semilla')
  } catch (error) {
    console.log('No se han insertado los datos de la semilla')
  } finally {
    mongoose.connection.close()
  }
})
