import React, {useState, useEffect} from 'react'
import { propfind } from 'superagent'

function Quiz1 (props) {
  
  const thatPokemon = props.pokemon[Math.floor(Math.random() * props.pokemon.length)]

  const [style, setStyle] = useState({
    backgroundColor: "orange",
    mask: "url(/images/svgs/"+thatPokemon.id+".svg) no-repeat center / contain",
    WebkitMask: "url(/images/svgs/"+thatPokemon.id+".svg) no-repeat center / contain",
    transition: "background-color 1s",
    transition: "mask 1s"
  })

  const isCorrect = evt => {
    const isCorrect = parseInt(evt.target.id) === thatPokemon.id
    document.getElementById(thatPokemon.id).className = 'correct'
    if (isCorrect === true) {
      evt.target.className = 'correct'
    } else {
      evt.target.className = 'incorrect'
    }
    setStyle({
      background: "url(/images/svgs/"+thatPokemon.id+".svg) no-repeat center / contain",
      transition: "background-color 1s",
      transition: "mask 1s"
    })
    setTimeout(function () {
      props.loadPokemon()
    }, 6000)
  }

  return (
    <>
      <h1>Who&rsquo;s that Pokemon?</h1>
      <div id="quizWrap">

        <div id="hiddenPokemon" style={style}></div>

      </div>
      <div id="answers">
        <form action="#">
          <div className="buttonWrap">
            {props.pokemon.map(pokemon => {
              return (
                <button onClick={isCorrect} key={pokemon.id} id={pokemon.id}>{pokemon.pokemon.name}</button>
              )
            })}
          </div>
          <input type="hidden" name="whatPokemon" value="id1" />
          <input type="hidden" name="whatPokemon" value="id2" />
          <input type="hidden" name="whatPokemon" value="id3" />
          <input type="hidden" name="whatPokemon" value="id4" />
        </form>
      </div>

    </>
  )
}

export default Quiz1
