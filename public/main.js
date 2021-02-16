function main() {
  let currentPlayer = 1
  let player1 = ''
  let player2 = ''

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

  const team1Choice = document.querySelector('.player1 h3')
  const team2Choice = document.querySelector('.player2 h3')

  const player1Image = document.querySelector('.player1 .image')
  const player2Image = document.querySelector('.player2 .image')

  const winner = document.querySelector('.winner p')
  const winnerAnnounce = document.querySelector('.winner-announce')
  const reset = document.querySelector('.reset')

  function clickSelection(event) {
    const thingClickedOn = event.target
    console.log(thingClickedOn)

    if (thingClickedOn.classList.contains('locked')) {
      alert('Not your turn')
    } else if (thingClickedOn.classList.contains('played')) {
      alert('Player already played')
    } else {
      if (currentPlayer === 1) {
        if (thingClickedOn.classList.contains('select-rock')) {
          player1 = 'Rock'
          thingClickedOn.classList.add('chosen')
        } else if (thingClickedOn.classList.contains('select-paper')) {
          player1 = 'Paper'
          thingClickedOn.classList.add('chosen')
        } else if (thingClickedOn.classList.contains('select-scissors')) {
          player1 = 'Scissors'
          thingClickedOn.classList.add('chosen')
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
        let team2Choice = document.querySelector('.player2 h3')

        player2SelectRock.classList.remove('not-turn')
        player2SelectPaper.classList.remove('not-turn')
        player2SelectScissors.classList.remove('not-turn')

        if (thingClickedOn.classList.contains('select-rock')) {
          player2 = 'Rock'
          thingClickedOn.classList.add('chosen')
        } else if (thingClickedOn.classList.contains('select-paper')) {
          player2 = 'Paper'
          thingClickedOn.classList.add('chosen')
        } else if (thingClickedOn.classList.contains('select-scissors')) {
          player2 = 'Scissors'
          thingClickedOn.classList.add('chosen')
        } else {
          console.log('Huh')
        }
        player2SelectRock.classList.add('played')
        player2SelectPaper.classList.add('played')
        player2SelectScissors.classList.add('played')

        currentPlayer = 0
      } else if (currentPlayer === 0) {
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

  // Show Winner

  function showWinner(event) {
    const thingClickedOn = event.target
    player1Image.classList.remove('blank')
    player2Image.classList.remove('blank')

    if (player1 === 'Rock' && player2 === 'Rock') {
      player1Image.classList.add('rock')
      team1Choice.textContent = player1

      player2Image.classList.add('rock')
      team2Choice.textContent = player2

      winnerAnnounce.textContent = `It's a Tie!`
    } else if (player1 === 'Paper' && player2 === 'Paper') {
      player1Image.classList.add('paper')
      team1Choice.textContent = player1

      player2Image.classList.add('paper')
      team2Choice.textContent = player2

      winnerAnnounce.textContent = `It's a Tie!`
    } else if (player1 === 'Scissors' && player2 === 'Scissors') {
      player1Image.classList.add('scissors')
      team1Choice.textContent = player1

      player2Image.classList.add('scissors')
      team2Choice.textContent = player2

      winnerAnnounce.textContent = `It's a Tie!`
    } else if (player1 === 'Rock' && player2 === 'Paper') {
      player1Image.classList.add('rock')
      team1Choice.textContent = player1

      player2Image.classList.add('paper', 'win')

      team2Choice.textContent = player2

      winnerAnnounce.textContent = `Player 2 wins with Paper!`
    } else if (player1 === 'Paper' && player2 === 'Rock') {
      player1Image.classList.add('paper', 'win')
      team1Choice.textContent = player1

      player2Image.classList.add('rock')
      team2Choice.textContent = player2

      winnerAnnounce.textContent = `Player 1 wins with Paper!`
    } else if (player1 === 'Rock' && player2 === 'Scissors') {
      player1Image.classList.add('rock', 'win')
      team1Choice.textContent = player1

      player2Image.classList.add('scissors')
      team2Choice.textContent = player2

      winnerAnnounce.textContent = `Player 1 Wins with Rock!`
    } else if (player1 === 'Scissors' && player2 === 'Rock') {
      player1Image.classList.add('scissors')
      team1Choice.textContent = player1

      player2Image.classList.add('rock', 'win')
      team2Choice.textContent = player2

      winnerAnnounce.textContent = `Player 2 Wins with Rock!`
    } else if (player1 === 'Paper' && player2 === 'Scissors') {
      player1Image.classList.add('paper')
      team1Choice.textContent = player1

      player2Image.classList.add('scissors', 'win')
      team2Choice.textContent = player2

      winnerAnnounce.textContent = `Player 2 Wins with Scissors!`
    } else if (player1 === 'Scissors' && player2 === 'Paper') {
      player1Image.classList.add('scissors', 'win')
      team1Choice.textContent = player1

      player2Image.classList.add('paper')
      team2Choice.textContent = player2

      winnerAnnounce.textContent = `Player 1 Wins with Scissors!`
    }

    winnerAnnounce.classList.remove('display-none')
    winnerAnnounce.classList.add('win')
  }

  winner.addEventListener('click', showWinner)

  // Reset Game

  const resetGame = event => {
    currentPlayer = 1
    player1 = ''
    player2 = ''

    player1Image.classList.add('blank')
    player1Image.classList.remove('rock', 'paper', 'scissors', 'win')
    player1SelectRock.classList.remove('played')
    player1SelectPaper.classList.remove('played')
    player1SelectScissors.classList.remove('played')

    player2Image.classList.add('blank')
    player2Image.classList.remove('rock', 'paper', 'scissors')
    player2SelectRock.classList.remove('played')
    player2SelectPaper.classList.remove('played')
    player2SelectScissors.classList.remove('played')
    player2SelectRock.classList.add('locked')
    player2SelectPaper.classList.add('locked')
    player2SelectScissors.classList.add('locked')

    winnerAnnounce.classList.add('display-none')
    winnerAnnounce.classList.remove('win')
  }
  reset.addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)
