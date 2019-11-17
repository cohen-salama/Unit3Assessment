const { db } = require('../db/index.js')

const getAll = async () => {
  try {
    let all = await db.any('SELECT * FROM researchers')
    return all
  }
  catch(err) {
    throw err
  }
}

const getById = async (id) => {
  try {
    let withId = await db.any(`SELECT * FROM researchers WHERE id = ${id}`)
    return withId
  }
  catch(err) {
    throw err
  }
}

const addNew = async (body) => {
  try {
    let insertQuery = 'INSERT INTO researchers (name, job_title) VALUES ($1, $2) RETURNING *'
    let newItem = await db.one(insertQuery, [body.name, body.job_title])
    return newItem
  }
  catch(err) {
    throw err
  }
}

const updateById = async (id, body) => {
  try {
    let updateQuery = `UPDATE researchers SET name = ($1), job_title = ($2) WHERE id = ${id} RETURNING *`
    let updatedItem = await db.one(updateQuery, [body.name, body.job_title])
    return updatedItem
  }
  catch(err) {
    throw err
  }
}

const deleteById = async (id) => {
  try {
    let deletedItem = await db.one(`DELETE from researchers WHERE id = ${id} RETURNING *`)
    return deletedItem
  }
  catch(err) {
    throw err
  }
}

module.exports = {
  getAll,
  getById,
  addNew,
  updateById,
  deleteById
}
