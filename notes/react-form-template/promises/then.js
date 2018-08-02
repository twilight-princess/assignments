const axios = require('axios')

const swUrl = 'https://swapi.co/api/people/1'

// Chaining promises
axios.get(swUrl)
    // without .then will just return pending
    .then(response => {
        const starWarsFilm = response.data.films[0]
        return starWarsFilm
    })
    .then(film => {
      return axios.get(film)  
    })
    .then(reponse => {
        return axios.get(response.data.characters[4])
    })
    .then(character => {
        console.log(character)
    })
    .catch(err => {
        return err
    })
