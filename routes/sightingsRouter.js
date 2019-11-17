const express = require('express')
const router = express.Router()

const Sightings = require('../models/Sightings')

router.get('/', async (req, res) => {
  try {
    const sightings = await Sightings.getAll()
    res.json({
      status: 'success',
      message: 'retrieved all sightings',
      payload: sightings
  })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'no sightings found',
      payload: null
  })
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const sighting = await Sightings.getById(id)
    res.json({
      status: 'success',
      message: 'retrieved single sighting',
      payload: sighting
    })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'sighting not found',
      payload: null
    })
  }
})

router.get('/species/:id', async (req, res) => {
  const id = req.params.id
  try {
    const sighting = await Sightings.getBySpeciesId(id)
    res.json({
      status: 'success',
      message: 'retrieved sightings',
      payload: sightings
    })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'no sightings found',
      payload: null
    })
  }
})

router.get('/researchers/:id', async (req, res) => {
  const id = req.params.id
  try {
    const sightings = await Sightings.getByResearcherId(id)
    res.json({
      status: 'success',
      message: 'retrieved sightings',
      payload: sightings
    })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'no sightings found',
      payload: null
    })
  }
})

router.get('/habitats/:id', async (req, res) => {
  const id = req.params.id
  try {
    const sighting = await Sightings.getByHabitatId(id)
    res.json({
      status: 'success',
      message: 'retrieved sightings',
      payload: sightings
    })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'no sightings found',
      payload: null
    })
  }
})

router.post('/', async (req, res) => {
  const body = {
    ...req.body
  }
  try {
    const sighting = await Sightings.addNew(body)
    res.json({
      status: 'success',
      message: 'sighting added',
      payload: sighting
    })
  } catch(err) {
    console.log(err)
    res.json({
      status: 'error',
      message: 'sighting not added',
      payload: null
    })
  }
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const deleted = await Sightings.deleteById(id)
    res.json({
      status: 'success',
      message: 'sighting deleted',
      payload: deleted
    })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'sighting not deleted',
      payload: null
    })
  }
})

module.exports = router
