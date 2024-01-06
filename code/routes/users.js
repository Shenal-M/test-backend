const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('users')
})

router.get('/profile', (req, res) => {
  res.send('profile')
})

module.exports = router

