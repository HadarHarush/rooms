const express = require('express')
const chatController = require('./chat.controller')

const router = express.Router()

router.route('/:chatId/msg').post(chatController.addMsg)
router
  .route('/:chatId')
  .get(chatController.getById)
  .delete(chatController.removeChat)
// .put(chatController.updateContact)
// .delete(chatController.removeContact)

router.route('/').get(chatController.query).post(chatController.addChat)

module.exports = router
