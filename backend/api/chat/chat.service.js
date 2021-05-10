const dbService = require('../../services/db.service')
const userService = require('../../api/user/user.service')
const socketService = require('../../services/socket.service')
const ObjectId = require('mongodb').ObjectId

const CHAT_KEY = 'chats'

module.exports = {
  query,
  getById,
  addChat,
  removeChat,
  addMsg,
}

async function query(userId) {
  try {
    const user = await userService.getUserById(userId)
    const chatsIds = user.chatsIds.map((currChatId) => ObjectId(currChatId))
    const collection = await dbService.getCollection(CHAT_KEY)
    const chatsCursor = await collection.find({ _id: { $in: chatsIds } })
    return await chatsCursor.toArray()
  } catch (err) {
    console.log('couldnt get chats: ', err)
    throw err
  }
}

async function getById(userId, chatId) {
  try {
    const user = await userService.getUserById(userId)
    if (!user.chatsIds.includes(chatId)) {
      throw Error('user not have this chat')
    }
    const collection = await dbService.getCollection(CHAT_KEY)
    return await collection.findOne({ _id: ObjectId(chatId) })
  } catch (err) {
    console.log('couldnt get chat: ', err)
    throw err
  }
}

async function addChat(userId, prmChat) {
  try {
    prmChat.createdAt = Date.now()
    const collection = await dbService.getCollection(CHAT_KEY)
    const cursor = await collection.insertOne(prmChat)
    const chat = cursor.ops[0]
    const participationsIds = chat.participations.map((currPrt) => currPrt._id)
    const prmAddChatToUserProcess = participationsIds.map((currId) =>
      userService.addChatToUser(currId, JSON.parse(JSON.stringify(chat._id)))
    )
    await Promise.all(prmAddChatToUserProcess)
    chat.participations.forEach((prt) => {
      if (prt._id === userId) return
      socketService.emitToRoom(
        'chat-update',
        {
          txt: `You've been added to the new room #${chat.name}`,
          type: 'chat-add',
          chat,
        },
        prt._id
      )
    })
    return chat
  } catch (err) {
    console.log('couldnt add chat: ', err)
    throw err
  }
}

async function removeChat(chatId) {
  try {
    const collection = await dbService.getCollection(CHAT_KEY)
    const chat = await collection.findOne({ _id: ObjectId(chatId) })
    const participationsIds = chat.participations.map((currPrt) => currPrt._id)
    const prmRemoveChatFromUserProcess = participationsIds.map((currId) =>
      userService.removeChatFromUser(
        currId,
        JSON.parse(JSON.stringify(chat._id))
      )
    )
    await Promise.all(prmRemoveChatFromUserProcess)
    const res = await collection.deleteOne({ _id: ObjectId(chatId) })
    chat.participations.forEach((prt) => {
      socketService.emitToRoom(
        'chat-update',
        {
          txt: `The chat ${chat.name} has been removed!`,
          type: 'chat-remove',
        },
        prt._id
      )
    })
    return res
  } catch (err) {
    console.log('couldnt add chat: ', err)
    throw err
  }
}

async function addMsg(userId, chatId, msg) {
  try {
    msg.createdAt = Date.now()
    const collection = await dbService.getCollection(CHAT_KEY)
    const cursor = await collection.findOneAndUpdate(
      { _id: ObjectId(chatId) },
      { $push: { msgs: msg } },
      { returnNewDocument: true }
    )
    const chat = await getById(userId, chatId)
    chat.participations.forEach((prt) => {
      if (prt._id === userId) return
      socketService.emitToRoom(
        'chat-update',
        {
          txt: `#${chat.name} - @${msg.from.username}: ${msg.txt}`,
          type: 'chat-add-msg',
          chat,
        },
        prt._id
      )
    })
    return msg
  } catch (err) {
    console.log('couldnt add message: ', err)
    throw err
  }
}
//
// async function updateContact(userId, contact) {
//   try {
//     const user = await userService.getUserById(userId)
//     const contactIdx = user.contacts.findIndex(
//       (currContact) => currContact.id == contact.id
//     )
//     if (contactIdx === -1) throw Error('couldnt find contact')
//     user.contacts.splice(contactIdx, 1, contact)
//     await userService.updateUser(user)
//     return contact
//   } catch (err) {
//     console.log('couldnt update contact: ', err)
//     throw err
//   }
// }
//
// async function removeContact(userId, contactId) {
//   try {
//     const user = await userService.getUserById(userId)
//     user.contacts = user.contacts.filter(
//       (currContact) => currContact.id !== contactId
//     )
//     await userService.updateUser(user)
//     return 'deleted'
//   } catch (err) {
//     console.log('couldnt delete contact: ', err)
//     throw err
//   }
// }
