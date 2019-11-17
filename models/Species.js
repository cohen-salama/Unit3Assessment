const { db } = require('../db/index.js')

const getAll = async () => {
  try {
    let all = await db.any('SELECT * FROM species')
    return all
  }
  catch(err) {
    throw err
  }
}

const getById = async (id) => {
  try {
    let withId = await db.any(`SELECT * FROM species WHERE id = ${id}`)
    return withId
  }
  catch(err) {
    throw err
  }
}

const addNew = async (body) => {
  try {
    let insertQuery = 'INSERT INTO species (name, job_title) VALUES ($1, $2) RETURNING *'
    let newItem = await db.one(insertQuery, [body.name, body.is_mammal])
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
