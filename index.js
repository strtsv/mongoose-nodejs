const mongoose = require('mongoose')
const User = require('./models/user')
mongoose.Promise = require('bluebird')

mongoose.connect('mongodb://localhost/testmongoose', {
  useMongoClient: true
})

const db = mongoose.connection

db.on('error', err => {
  console.log('error connection', err)
})

db.once('open', () => {
  console.log('we are connected')
  User.findById('59d8b62d761b013137c71025', (err, user) => {
    console.log('result', err, user)
  })
  // const user = new User({name: 'Alex'})
  // console.log('user', user)
  // user.save((err, createdUser) => {
  //   console.log('result', err, createdUser)
  // })
})
