const { db } = require('../db/index.js')

const getAll = async () => {
  try {
    let researchers = await db.any('SELECT * FROM researchers')
    return researchers
  }
  catch(err) {
    throw err
  }
}

module.exports = {
  getAll
}
