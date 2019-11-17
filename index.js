document.addEventListener('DOMContentLoaded', () => {
  let allBtn = document.getElementById('all')
  let specificBtn = document.getElementById('specific')

  allBtn.addEventListener('click', () => {
    allSightings()
  })

  specificBtn.addEventListener('click', () => {
    sightingsByResearcher()
  })
})

const allSightings = async () => {
  let container = document.getElementById('container')
  container.innerText = ''
  let response = await axios.get('http://localhost:3030/sightings')
  let dataArray = response.data.payload
  for (el of dataArray) {
    let researcher = await axios.get(`http://localhost:3030/researchers/${el.researcher_id}`)
    let species = await axios.get(`http://localhost:3030/species/${el.species_id}`)
    let habitat = await axios.get(`http://localhost:3030/habitats/${el.habitat_id}`)
    let sighting = document.createElement('p')
    sighting.innerText = `An ${species.data.payload.name} was spotted by ${researcher.data.payload.name} in the ${habitat.data.payload.category}`
    container.appendChild(sighting)
  }
}

const sightingsByResearcher = async () => {
  let container = document.getElementById('container')
  container.innerText = ''
  let id = document.getElementById('researcherInput').value
  let response = await axios.get(`http://localhost:3030/sightings/researchers/${id}`)
  let dataArray = response.data.payload
  for (el of dataArray) {
    let researcher = await axios.get(`http://localhost:3030/researchers/${el.researcher_id}`)
    let species = await axios.get(`http://localhost:3030/species/${el.species_id}`)
    let habitat = await axios.get(`http://localhost:3030/habitats/${el.habitat_id}`)
    let sighting = document.createElement('p')
    sighting.innerText = `An ${species.data.payload.name} was spotted by ${researcher.data.payload.name} in the ${habitat.data.payload.category}`
    container.appendChild(sighting)
  }
}
