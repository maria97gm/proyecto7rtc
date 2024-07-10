const mongoose = require('mongoose')

const danceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    date: {
      type: String,
      required: true,
      enum: ['L-X-V', 'M-J', 'V']
    },
    duration: { type: Number },
    users: [{ type: mongoose.Types.ObjectId, ref: 'users' }]
  },
  {
    timestamps: true,
    collection: 'dances'
  }
)
const Dance = mongoose.model('dances', danceSchema, 'dances')

module.exports = Dance
