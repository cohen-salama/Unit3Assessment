const express = require('express')
const router = express.Router()

const Habitats = require('../models/Habitats')

router.get('/', async (req, res) => {
  try {
    const habitats = await Habitats.getAll()
    res.json({
      status: 'success',
      message: 'retrieved all habitats',
      payload: habitats
  })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'no habitats found',
      payload: null
  })
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const habitat = await Habitats.getById(id)
    res.json({
      status: 'success',
      message: 'retrieved single habitat',
      payload: habitat
    })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'habitat not found',
      payload: null
    })
  }
})

router.post('/', async (req, res) => {
  const body = {
    ...req.body
  }
  try {
    const habitat = await Habitats.addNew(body)
    res.json({
      status: 'success',
      message: 'habitat added',
      payload: habitat
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
