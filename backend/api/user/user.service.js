const axios = require('axios')
const dbService = require('../../services/db.service')
const utilService = require('../../services/util.service')
const { emit, emitToRoom } = require('../../services/socket.service')
const ObjectId = require('mongodb').ObjectId

const USER_KEY = 'users'

module.exports = {
  query,
  getUserById,
  getUsers,
  isUsernameExist,
  getUserByUsername,
  addUser,
  updateUser,
  addChatToUser,
  removeChatFromUser,
}

async function query() {
  try {
    const collection = await dbService.getCollection(USER_KEY)
    const usersCursor = await collection.find({})
    let users = await usersCursor.toArray()
    users.forEach((currUser) => delete currUser.password)
    return users
  } catch (err) {
    console.log('couldnt get users: ', err)
    throw err
  }
}

async function getUserById(userId) {
  try {
    const collection = await dbService.getCollection(USER_KEY)
    const user = await collection.findOne({ _id: ObjectId(userId) })
    delete user.password
    return user
  } catch (err) {
    console.log('couldnt get user: ', err)
    throw err
  }
}

async function getUsers(username) {
  try {
    const collection = await dbService.getCollection(USER_KEY)
    const users = await collection
      .find({
        username: { $regex: '.*' + '.*' },
      })
      .toArray()
    users.forEach((currUser) => delete currUser.password)
    return users
  } catch (err) {
    console.log('couldnt search users: ', err)
    throw err
  }
}

async function addUser({ username, password, fullname, mail }) {
  try {
    const sampleUser = await axios.get('https://randomuser.me/api/')
    const randomImgUrl = sampleUser.data.results[0].picture.thumbnail
    const user = {
      username,
      password,
      fullname,
      mail,
      profileImgUrl: randomImgUrl,
      chatsIds: [],
      createdAt: Date.now(),
    }
    const collection = await dbService.getCollection(USER_KEY)
    const res = await collection.insertOne(user)
    return res.ops[0]
  } catch (err) {
    console.log('couldnt add user', err)
    throw err
  }
}
async function updateUser(newUser) {
  try {
    //delete non updatable fields from user:
    delete newUser.createdAt
    const _id = newUser._id
    delete newUser._id

    const collection = await dbService.getCollection(USER_KEY)
    const res = await collection.findOneAndUpdate(
      { _id: ObjectId(_id) },
      { $set: newUser },
      { returnOriginal: false }
    )
    return res.value
  } catch (err) {
    console.log('couldnt update user: ', err)
    throw err
  }
}

async function getUserByUsername(username) {
  try {
    const collection = await dbService.getCollection(USER_KEY)
    const user = await collection.findOne({ username })
    if (!user) throw Error('couldnt find user')
    return user
  } catch (err) {
    console.log('error in checking username existance proccess: ', err)
    throw err
  }
}

async function addChatToUser(userId, chatId) {
  try {
    const collection = await dbService.getCollection(USER_KEY)
    const cursor = await collection.findOneAndUpdate(
      { _id: ObjectId(userId) },
      { $push: { chatsIds: chatId } },
      { returnNewDocument: true }
    )
    return cursor.value
  } catch (err) {
    console.log('error in adding chat to user data proccess: ', err)
    throw err
  }
}

async function removeChatFromUser(userId, chatId) {
  try {
    const collection = await dbService.getCollection(USER_KEY)
    const cursor = await collection.findOneAndUpdate(
      { _id: ObjectId(userId) },
      { $pull: { chatsIds: chatId } },
      { returnNewDocument: true }
    )
    return cursor.value
  } catch (err) {
    console.log('error in removing chat from user data proccess: ', err)
    throw err
  }
}

async function isUsernameExist(username) {
  try {
    const collection = await dbService.getCollection(USER_KEY)
    const user = await collection.findOne({ username })
    if (!user) return false
    return true
  } catch (err) {
    console.log('error in checking username existance proccess: ', err)
    throw err
  }
}
