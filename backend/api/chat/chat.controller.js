const chatService = require('./chat.service')
const userService = require('../user/user.service')
module.exports = {
  query,
  getById,
  addChat,
  removeChat,
  addMsg,
}

async function query(req, res) {
  try {
    const loggedInUserId = req.session.loggedInUser._id
    const chats = await chatService.query(loggedInUserId)
    res.json(chats)
  } catch (err) {
    console.log('error in controller: ', err)
    res.status(500).send({ err: 'couldnt get chats' })
  }
}

async function getById(req, res) {
  try {
    const loggedInUserId = req.session.loggedInUser._id
    const { chatId } = req.params
    const chats = await chatService.getById(loggedInUserId, chatId)
    res.json(chats)
  } catch (err) {
    console.log('error in controller: ', err)
    res.status(500).send({ err: 'couldnt get chats' })
  }
}

async function addChat(req, res) {
  try {
    const loggedInUserId = req.session.loggedInUser._id
    const prmChat = req.body
    const chat = await chatService.addChat(loggedInUserId, prmChat)
    res.json(chat)
  } catch (err) {
    console.log('error in controller: ', err)
    res.status(500).send({ err: 'cannot add chat' })
  }
}

async function removeChat(req, res) {
  try {
    const loggedInUserId = req.session.loggedInUser._id
    const user = await userService.getUserById(loggedInUserId)
    const chatId = req.params.chatId ? req.params.chatId : req.body.chatId
    console.log('chatId:', chatId)
    if (!user.chatsIds.includes(chatId)) {
      throw Error('Unothorized!')
    }
    const proccess = await chatService.removeChat(chatId)
    res.json('removed')
  } catch (err) {
    console.log('error in controller: ', err)
    res.status(500).send({ err: 'cannot remove chat' })
  }
}

async function addMsg(req, res) {
  try {
    const loggedInUserId = req.session.loggedInUser._id
    const { chatId } = req.params
    const msg = req.body
    if (msg.from._id !== loggedInUserId) {
      throw Error('user can add msg only from himself (not someone else)')
    }
    const updatedMsg = await chatService.addMsg(loggedInUserId, chatId, msg)
    res.json(updatedMsg)
  } catch (err) {
    console.log('error in controller: ', err)
    res.status(500).send({ err: 'cannot add msg' })
  }
}
//
// async function updateContact(req, res) {
//   try {
//     const contact = req.body
//     const { loggedInUser } = req.session
//     const loggedInUserId = loggedInUser._id
//     // const loggedInUserId = '606f15561e4bf041d8390a6e'
//     const updatedContact = await chatService.updateContact(
//       loggedInUserId,
//       contact
//     )
//     res.json(updatedContact)
//   } catch (err) {
//     res.status(500).send({ err: 'cannot update contact' })
//   }
// }
//
// async function removeContact(req, res) {
//   try {
//     const { contactId } = req.params
//     const { loggedInUser } = req.session
//     const loggedInUserId = loggedInUser._id
//     // const loggedInUserId = '606f15561e4bf041d8390a6e'
//     const contact = await chatService.removeContact(loggedInUserId, contactId)
//     res.json(contact)
//   } catch (err) {
//     res.status(500).send({ err: 'cannot add contact' })
//   }
// }
