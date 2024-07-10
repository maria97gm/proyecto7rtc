const User = require('../api/models/user')
const { verifyJWT } = require('../config/jwt')
const jwt = require('jsonwebtoken')

const deleteUserByAdminOrUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const parsedToken = token.replace('Bearer ', '')

    const { id } = verifyJWT(parsedToken)
    const idUserDelete = req.params.id

    const user = await User.findById(id)

    if (user.rol === 'admin' || user.id === idUserDelete) {
      user.password = null
      req.user = user
      next()
    } else {
      return res
        .status(400)
        .json('Esta acción sólo la pueden realizar los administradoress')
    }
  } catch (error) {
    return res.status(400).json('No estás autorizado')
  }
}

module.exports = { deleteUserByAdminOrUser }
