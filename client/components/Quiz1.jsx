import React, {useState, useEffect} from 'react'
import { propfind } from 'superagent'

function Quiz1 (props) {
  const[isClicked,setClicked] = useState(false)
  const thatPokemon = props.pokemon[Math.floor(Math.random() * props.pokemon.length)]
  console.log('The winner is:', thatPokemon.id)

  const [style, setStyle] = useState({
    backgroundColor: "#316cb2",
    mask: "url(/images/svgs/"+thatPokemon.id+".svg) no-repeat center / contain",
    WebkitMask: "url(/images/svgs/"+thatPokemon.id+".svg) no-repeat center / contain",
    transition: "background-color 1s",
    transition: "mask 1s"
  })

  let score = props.score
  let round = props.round

  const isCorrect = evt => {
    if(!isClicked){
      setClicked(true)
      const isCorrect = parseInt(evt.target.id) === thatPokemon.id
      document.getElementById(thatPokemon.id).className = 'correct'
      if (isCorrect === true) {
        evt.target.className = 'correct'
        score++
      } else {
        evt.target.className = 'incorrect'
      }
      round++
      setStyle({
        background: "url(/images/svgs/"+thatPokemon.id+".svg) no-repeat center / contain",
        transition: "background-color 1s",
        transition: "mask 1s"
      })
      setTimeout(function () {
        props.loadPokemon()
        props.setScore(score)
        props.setRound(round)
      }, 3000)      
    }

  }

  return (
    <>
      <h1>Who&rsquo;s that Pokemon?</h1>
      <div id="quizWrap">
        <div className="scoreboard large">
          Score: {score} / {round}
        </div>

        <div id="hiddenPokemon" style={style}></div>

      </div>
      <div className="scoreboard small">
        Score: {score} / {round}
      </div>
      <div id="answers">
        <div className="wrap">
          <div className="buttonWrap">
            {props.pokemon.map(pokemon => {
              return (
                <button onClick={isCorrect} key={pokemon.id} id={pokemon.id}>{pokemon.pokemon.name}</button>
              )
            })}
          </div>
        </div>
      </div>

    </>
  )
}

export default Quiz1
