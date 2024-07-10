const {
  getAcademies,
  postAcademy,
  deleteAcademy,
  updateAcademy,
  getAcademyById
} = require('../controllers/academy')

const academyRoutes = require('express').Router()

academyRoutes.get('/', getAcademies)
academyRoutes.post('/', postAcademy)
academyRoutes.delete('/:id', deleteAcademy)
academyRoutes.put('/:id', updateAcademy)

module.exports = academyRoutes
