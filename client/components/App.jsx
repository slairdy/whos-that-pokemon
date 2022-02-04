import React, { useState, useEffect } from 'react'
import request from 'superagent'
import Quiz1 from './Quiz1'

import { getPokemonInfo } from '../api'

function App () {
  const [pokemonData, setPokemonData] = useState(null) // console.log(pokemonData) = {count: 1118, next: 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=151', previous: null, results: Array(151)}
  const [loading, setLoading] = useState(true)
  console.log(pokemonData)

  function loadPokemon () {
    setLoading(true)
    getPokemonInfo()
      .then(pokemonData => {
        setPokemonData(pokemonData)
        return null
      })
      .finally(() => {
        setLoading(false)
      })
      .catch(e => console.error(e))
  }

  useEffect(() => {
    loadPokemon()
  }, [])

  if (loading) return (<p>loading...</p>)

  // pokemonData

  // get random number
  function randInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const fourPokemon = []
  // limit random numbers to four instances
  for (let i = 0; i < 4; i++) {
    const randNum = randInt(1, 151)
    fourPokemon.push({ pokemon: pokemonData.results[randNum], id: (randNum + 1) })
  }

  return (
    <div>
      <Quiz1 pokemon={fourPokemon} loadPokemon={loadPokemon} />
    </div>
  )
}

export default App
