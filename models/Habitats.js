const { db } = require('../db/index.js')

const getAll = async () => {
  try {
    let all = await db.any('SELECT * FROM habitats')
    return all
  }
  catch(err) {
    throw err
  }
}

const getById = async (id) => {
  try {
    let withId = await db.any(`SELECT * FROM habitats WHERE id = ${id}`)
    return withId
  }
  catch(err) {
    throw err
  }
}

const addNew = async (body) => {
  try {
    let insertQuery = 'INSERT INTO habitats (category) VALUES ($1) RETURNING *'
    let newItem = await db.one(insertQuery, [body.category])
    return newItem
  }
  catch(err) {
    throw err
  }
}

module.exports = {
  getAll,
  getById,
  addNew,
}
