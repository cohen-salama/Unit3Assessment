const { db } = require('../db/index.js')

const getAll = async () => {
  try {
    let all = await db.any('SELECT * FROM sightings')
    return all
  }
  catch(err) {
    throw err
  }
}

const getById = async (id) => {
  try {
    let withId = await db.any(`SELECT * FROM sightings WHERE id = ${id}`)
    return withId
  }
  catch(err) {
    throw err
  }
}

const getBySpeciesId = async(id) => {
  try {
    let withSpeciesId = await db.any(`SELECT * FROM sightings WHERE species_id = ${id}`)
    return withSpeciesId
  }
  catch(err) {
    throw err
  }
}

const getByResearcherId = async(id) => {
  try {
    let withResearcherId = await db.any(`SELECT * FROM sightings WHERE researcher_id = ${id}`)
    return withResearcherId
  }
  catch(err) {
    throw err
  }
}

const getByHabitatId = async(id) => {
  try {
    let withHabitatId = await db.any(`SELECT * FROM sightings WHERE habitat_id = ${id}`)
    return withHabitatId
  }
  catch(err) {
    throw err
  }
}

const addNew = async (body) => {
  try {
    let insertQuery = 'INSERT INTO sightings (researcher_id, species_id, habitat_id) VALUES ($1, $2, $3) RETURNING *'
    let newItem = await db.one(insertQuery, [body.researcher_id, body.species_id, body.habitat_id])
    return newItem
  }
  catch(err) {
    throw err
  }
}

const deleteById = async (id) => {
  try {
    let deletedItem = await db.one(`DELETE from sightings WHERE id = ${id} RETURNING *`)
    return deletedItem
  }
  catch(err) {
    throw err
  }
}

module.exports = {
  getAll,
  getById,
  getBySpeciesId,
  getByResearcherId,
  getByHabitatId,
  addNew,
  deleteById
}
