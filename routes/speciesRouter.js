const express = require('express')
const router = express.Router()

const Species = require('../models/Species')

router.get('/', async (req, res) => {
  try {
    const species = await Species.getAll()
    res.json({
      status: 'success',
      message: 'retrieved all species',
      payload: species
  })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'no species found',
      payload: null
  })
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const species = await Species.getById(id)
    res.json({
      status: 'success',
      message: 'retrieved single species',
      payload: species[0]
    })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'species not found',
      payload: null
    })
  }
})

router.post('/', async (req, res) => {
  const body = {
    ...req.body
  }
  try {
    const species = await Species.addNew(body)
    res.json({
      status: 'success',
      message: 'species added',
      payload: species
    })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'species not added',
      payload: null
    })
  }
})

module.exports = router
