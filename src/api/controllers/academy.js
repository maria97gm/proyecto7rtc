const Academy = require('../models/academy')

const getAcademies = async (req, res, next) => {
  try {
    const allAcademies = await Academy.find().populate('dances').populate('users');
    return res.status(200).json(allAcademies)
  } catch (error) {
    return res.status(400).json('No hemos accedido a las academias')
  }
}

const postAcademy = async (req, res, next) => {
  try {
    const newAcademy = new Academy(req.body)
    const academySaved = await newAcademy.save()
    return res.status(201).json(academySaved)
  } catch (error) {
    return res.status(400).json('No se ha podido publicar una nueva academia')
  }
}

const deleteAcademy = async (req, res, next) => {
  const { id } = req.params
  try {
    const academyDeleted = await Academy.findByIdAndDelete(id)
    return res.status(200).json(academyDeleted)
  } catch (error) {
    return res.status(400).json('Fallo al intentar eliminar una academia')
  }
}

const updateAcademy = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateData = req.body
    const updatedAcademy = await Academy.findByIdAndUpdate(id, updateData, {
      new: true
    })
    return res.status(201).json(updatedAcademy)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = {
  getAcademies,
  postAcademy,
  deleteAcademy,
  updateAcademy
}
