const { generateSign } = require('../../config/jwt')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const register = async (req, res, next) => {
  try {
    const user = new User(req.body)

    const userDuplicated = await User.findOne({ userName: req.body.userName })
    if (userDuplicated) {
      return res
        .status(400)
        .json('Ya existe un usuario con ese nombre. Introduzca uno nuevo')
    }
    const userSaved = await user.save()
    return res.status(201).json(userSaved)
  } catch (error) {
    console.error('Error al registrar un usuario', error)
    return res
      .status(500)
      .json(`Error al registrar un usuario: ${error.message}`)
  }
}

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const login = async (req, res, next) => {
  try {
    const { userName, password } = req.body
    const user = await User.findOne({ userName })
    if (!user) {
      return res.status(400).json('Usuario o contraseña incorrecto')
    }
    if (bcrypt.compareSync(password, user.password)) {
      const token = generateSign(user._id)
      return res.status(200).json({ token, user })
    } else {
      return res.status(400).json('Usuario o contraseña incorrecto')
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const userDeleted = await User.findByIdAndDelete(id)
    return res.status(200).json({
      mensaje: 'Este usuario ha sido eliminado',
      userDeleted
    })
  } catch (error) {
    return res.status(400).json('No puedes eliminar al usuario')
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateData = req.body
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true
    })
    return res.status(201).json(updatedUser)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = { register, getUsers, login, deleteUser, updateUser }
