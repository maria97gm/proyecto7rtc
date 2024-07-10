const User = require('../api/models/user')
const { verifyJWT } = require('../config/jwt')

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      return res.status(400).json('Error, no tienes permisos')
    }

    const parsedToken = token.replace('Bearer ', '')

    const { id } = verifyJWT(parsedToken)
    const user = await User.findById(id)

    if (user.rol === 'admin') {
      user.password = null
      req.user = user
      next()
    }
  } catch (error) {
    console.error('Error:', error)
    return res.status(400).json('No eres administrador.')
  }
}

module.exports = { isAdmin }
