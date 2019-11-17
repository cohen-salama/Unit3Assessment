const express = require('express')
const router = express.Router()

const Researchers = require('../models/Researchers')

router.get('/', async (req, res) => {
  try {
    const researchers = await Researchers.getAll()
    res.json({
      status: 'success',
      message: 'retrieved all researchers',
      payload: researchers
  })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'no researchers found',
      payload: null
  })
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const researcher = await Researchers.getById(id)
    res.json({
      status: 'success',
      message: 'retrieved single researcher',
      payload: researcher[0]
    })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'researcher not found',
      payload: null
    })
  }
})

router.post('/', async (req, res) => {
  const body = {
    ...req.body
  }
  try {
    const researcher = await Researchers.addNew(body)
    res.json({
      status: 'success',
      message: 'researcher added',
      payload: researcher[0]
    })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'researcher not added',
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
    const updated = await Researchers.updateById(id, body)
    res.json({
      status: 'success',
      message: 'researcher updated',
      payload: updated[0]
    })
  } catch(err) {
    console.log(err)
    res.json({
      status: 'error',
      message: 'researcher not updated',
      payload: null
    })
  }
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const deleted = await Researchers.deleteById(id)
    res.json({
      status: 'success',
      message: 'researcher deleted',
      payload: deleted[0]
    })
  } catch(err) {
    res.json({
      status: 'error',
      message: 'researcher not deleted',
      payload: null
    })
  }
})

module.exports = router
