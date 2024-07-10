const {
  getDances,
  postDance,
  deleteDance,
  updateDance
} = require('../controllers/dance')

const danceRoutes = require('express').Router()

danceRoutes.get('/', getDances)
danceRoutes.post('/', postDance)
danceRoutes.delete('/:id', deleteDance)
danceRoutes.put('/:id', updateDance)

module.exports = danceRoutes
