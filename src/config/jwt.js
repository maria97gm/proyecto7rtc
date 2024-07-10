const jwt = require('jsonwebtoken')

const generateSign = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '21d' })
}

const verifyJWT = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = { generateSign, verifyJWT }
