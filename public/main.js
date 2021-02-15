function main() {
  let currentPlayer = 1

  const player1SelectRock = document.querySelector('.player1 .select-rock')
  const player1SelectPaper = document.querySelector('.player1 .select-paper')
  const player1SelectScissors = document.querySelector(
    '.player1 .select-scissors'
  )
  const player2SelectRock = document.querySelector('.player2 .select-rock')
  const player2SelectPaper = document.querySelector('.player2 .select-paper')
  const player2SelectScissors = document.querySelector(
    '.player2 .select-scissors'
  )
  const player1Image = document.querySelector('.player1 .image')
  const player2Image = document.querySelector('.player2 .image')

  function clickSelection(event) {
    const thingClickedOn = event.target
    console.log(thingClickedOn)

    if (thingClickedOn.classList.contains('locked')) {
      console.log('Not your turn')
      return
    } else if (thingClickedOn.classList.contains('played')) {
      console.log('Player already played')
      return
    } else {
      // If the currentPlayer is exactly the text 'X'
      if (currentPlayer === 1) {
        player1Image.classList.remove('blank')

        if (thingClickedOn.classList.contains('select-rock')) {
          player1Image.classList.add('rock')
        } else if (thingClickedOn.classList.contains('select-paper')) {
          player1Image.classList.add('paper')
        } else if (thingClickedOn.classList.contains('select-scissors')) {
          player1Image.classList.add('scissors')
        } else {
          console.log('Huh')
        }
        player2SelectRock.classList.remove('locked')
        player2SelectPaper.classList.remove('locked')
        player2SelectScissors.classList.remove('locked')

        player1SelectRock.classList.add('played')
        player1SelectPaper.classList.add('played')
        player1SelectScissors.classList.add('played')

        currentPlayer = 2
      } else if (currentPlayer === 2) {
        player2Image.classList.remove('blank')
        player2SelectRock.classList.remove('not-turn')
        player2SelectPaper.classList.remove('not-turn')
        player2SelectScissors.classList.remove('not-turn')

        if (thingClickedOn.classList.contains('select-rock')) {
          player2Image.classList.add('rock')
        } else if (thingClickedOn.classList.contains('select-paper')) {
          player2Image.classList.add('paper')
        } else if (thingClickedOn.classList.contains('select-scissors')) {
          player2Image.classList.add('scissors')
        } else {
          console.log('Huh')
        }
        player2SelectRock.classList.add('played')
        player2SelectPaper.classList.add('played')
        player2SelectScissors.classList.add('played')

        currentPlayer = 0
      } else {
        console.log('Game Over')
      }
    }
  }
  player1SelectRock.addEventListener('click', clickSelection)
  player1SelectPaper.addEventListener('click', clickSelection)
  player1SelectScissors.addEventListener('click', clickSelection)

  player2SelectRock.addEventListener('click', clickSelection)
  player2SelectPaper.addEventListener('click', clickSelection)
  player2SelectScissors.addEventListener('click', clickSelection)

  const reset = document.querySelector('.reset')
  const resetGame = event => {
    currentPlayer = 1

    player1Image.classList.add('blank')
    player1Image.classList.remove('rock')
    player1Image.classList.remove('paper')
    player1Image.classList.remove('scissors')
    player1SelectRock.classList.remove('played')
    player1SelectPaper.classList.remove('played')
    player1SelectScissors.classList.remove('played')

    player2Image.classList.add('blank')
    player2Image.classList.remove('rock')
    player2Image.classList.remove('paper')
    player2Image.classList.remove('scissors')
    player2SelectRock.classList.remove('played')
    player2SelectPaper.classList.remove('played')
    player2SelectScissors.classList.remove('played')
    player2SelectRock.classList.add('locked')
    player2SelectPaper.classList.add('locked')
    player2SelectScissors.classList.add('locked')
  }
  reset.addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)
