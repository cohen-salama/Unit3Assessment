const express = require('express')
const cors = requier('cors')

const researchersRouter = require('./routes/researchers')
const speciesRouter = require('./routes/species')
const animalsRouter = require('./routes/animals')
const habitatsRouter = require('./routes/habitats')
const sightingsRouter = require('./routes/sightings')

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
