const express = require('express')
const cors = require('cors')

const researchersRouter = require('./routes/researchersRouter')
const speciesRouter = require('./routes/speciesRouter')
const animalsRouter = require('./routes/animalsRouter')
const habitatsRouter = require('./routes/habitatsRouter')
const sightingsRouter = require('./routes/sightingsRouter')

const app = express()
const PORT = 3030

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/researchers', researchersRouter)
app.use('/species', speciesRouter)
app.use('/animals', animalsRouter)
app.use('/habitats', habitatsRouter)
app.use('/sightings', sightingsRouter)

app.listen(PORT, () => {
  console.log(`listening ${PORT}`)
})
