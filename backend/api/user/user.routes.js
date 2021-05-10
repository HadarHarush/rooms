const express = require('express')
const { get } = require('../auth/auth.routes')
const userController = require('./user.controller')

const router = express.Router()

router.get('/username/:username', userController.getUserByUsername)
router.get('/search/:username', userController.getUsers)

router
  .route('/:userId')
  .get(userController.getUserById)
  .put(userController.updateUser)
router.route('/').get(userController.query).post(userController.addUser)

module.exports = router
