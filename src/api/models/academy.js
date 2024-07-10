const mongoose = require('mongoose')

const academySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    number: { type: Number },
    dances: [{ type: mongoose.Types.ObjectId, ref: 'dances' }],
    users: [{ type: mongoose.Types.ObjectId, ref: 'users' }]
  },
  {
    timestamps: true,
    collection: 'academies'
  }
)
const Academy = mongoose.model('academies', academySchema, 'academies')

module.exports = Academy
