const { deleteUserByAdminOrUser } = require('../../middleware/deleteUser')
const { isAdmin } = require('../../middleware/isAdmin')
const { isAuth } = require('../../middleware/isAuth')
const {
  register,
  getUsers,
  login,
  deleteUser,
  updateUser
} = require('../controllers/user')

const userRoutes = require('express').Router()

userRoutes.post('/register', register)
userRoutes.get('/', getUsers)
userRoutes.post('/login', login)
userRoutes.delete('/:id', [deleteUserByAdminOrUser], deleteUser)
userRoutes.put('/:id', [isAdmin], updateUser)

module.exports = userRoutes
