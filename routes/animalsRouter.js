const express = require('express')
const router = express.Router()

const Animals = require('../models/Animals')

router.get('/', async (req, res) => {
  try {
    const animals = await Animals.getAll()
    res.json({
      status: 'success',
      message: 'retrieved all animals',
      payload: animals
  })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'no animals found',
      payload: null
  })
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const animal = await Animals.getById(id)
    res.json({
      status: 'success',
      message: 'retrieved single animal',
      payload: animal
    })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'animal not found',
      payload: null
    })
  }
})

router.post('/', async (req, res) => {
  const body = {
    ...req.body
  }
  try {
    const animal = await Animals.addNew(body)
    res.json({
      status: 'success',
      message: 'animal added',
      payload: animal
    })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'animal not added',
      payload: null
    })
  }
})

router.put('/:id', async (req, res) => {
  const id = req.params.id
  const body = {
    ...req.body
  }
  console.log(body)
  try {
    const updated = await Animals.updateById(id, body)
    res.json({
      status: 'success',
      message: 'animal updated',
      payload: updated
    })
  } catch(err) {
    console.log(err)
    res.json({
      status: 'error',
      message: 'animal not updated',
      payload: null
    })
  }
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const deleted = await Animals.deleteById(id)
    res.json({
      status: 'success',
      message: 'animal deleted',
      payload: deleted
    })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'animal not deleted',
      payload: null
    })
  }
})

module.exports = router
