const { db } = require('../db/index.js')

const getAll = async () => {
  try {
    let all = await db.any('SELECT * FROM animals')
    return all
  }
  catch(err) {
    throw err
  }
}

const getById = async (id) => {
  try {
    let withId = await db.any(`SELECT * FROM animals WHERE id = ${id}`)
    return withId
  }
  catch(err) {
    throw err
  }
}

const addNew = async (body) => {
  try {
    let insertQuery = 'INSERT INTO animals (species_id, nickname) VALUES ($1, $2) RETURNING *'
    let newItem = await db.one(insertQuery, [body.species_id, body.nickname])
    return newItem
  }
  catch(err) {
    throw err
  }
}

const updateById = async (id, body) => {
  try {
    let updatedItem
    if (body.species_id === undefined) {
      let updateQuery = `UPDATE animals SET nickname = ($1) WHERE id = ${id} RETURNING *`
      updatedItem = await db.one(updateQuery, [body.nickname])
    } else if (body.nickname === undefined) {
      let updateQuery = `UPDATE animals SET species_id = ($1) WHERE id = ${id} RETURNING *`
      updatedItem = await db.one(updateQuery, [body.species_id])
    } else {
      let updateQuery = `UPDATE animals SET species_id = ($1), nickname = ($2) WHERE id = ${id} RETURNING *`
      updatedItem = await db.one(updateQuery, [body.species_id, body.nickname])
    }
    return updatedItem
  }
  catch(err) {
    throw err
  }
}

const deleteById = async (id) => {
  try {
    let deletedItem = await db.one(`DELETE from animals WHERE id = ${id} RETURNING *`)
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
