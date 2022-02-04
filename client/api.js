import request from 'superagent'

/* const pokemonUrl = '/api/v1/pokemon/'

export function getPokemon () {
  return requestf
    .get(pokemonUrl)
    .then(response => response.body)
} */

export function getPokemonInfo () {
  return request
    .get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => {
      return response.body
    })
}
