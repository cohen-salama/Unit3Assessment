const pgp = require('pg-promise')()
const connectionStr = process.env.DATABASE_URL || 'postgres://localhost:5432/marine_research_db'

module.exports = { db: pgp(connectionStr) }
