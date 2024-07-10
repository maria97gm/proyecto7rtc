const Dance = require('../models/dance')

const getDances = async (req, res, next) => {
  try {
    const allDances = await Dance.find().populate('users')
    return res.status(200).json(allDances)
  } catch (error) {
    return res.status(400).json('No hemos accedido a las modalidades de baile')
  }
}

const postDance = async (req, res, next) => {
  try {
    const newDance = new Dance(req.body)
    const danceSaved = await newDance.save()
    return res.status(201).json(danceSaved)
  } catch (error) {
    return res
      .status(400)
      .json('No se ha podido publicar una modalidad de baile')
  }
}

const deleteDance = async (req, res, next) => {
  const { id } = req.params
  try {
    const danceDeleted = await Academy.findByIdAndDelete(id)
    return res.status(200).json(danceDeleted)
  } catch (error) {
    return res
      .status(400)
      .json('Fallo al intentar eliminar una modalidad de baile')
  }
}

const updateDance = async (req, res) => {
  try {
    const { id } = req.params

    const oldDance = await Dance.findById(id)
    const newDance = new Dance(req.body)

    newDance._id = id
    newDance.users = [...oldDance.users, ...newDance.users]

    const dance = await Dance.findByIdAndUpdate(id, newDance, { new: true })

    return res.status(201).json(dance)
  } catch (error) {
    return res.status(400).json('Error al actualizar el baile')
  }
}

module.exports = { getDances, postDance, updateDance, deleteDance }
