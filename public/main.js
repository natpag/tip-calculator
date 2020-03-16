const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

const updateTeamOneName = teamName => {
  console.log(teamName + 'button clicked')
  const name = document.querySelector('.team-1-input').value
  console.log(name)

  document.querySelector('.team-1-name').textContent = name
}

const updateTeamTwoName = teamName => {
  console.log(teamName + 'button clicked')
  const name = document.querySelector('.team-2-input').value
  console.log(name)

  document.querySelector('.team-2-name').textContent = name
}

const addtoTeamOneScore = addToScore => {
  console.log(addToScore + 'button clicked')
  const teamOneScore = document.querySelector('.team-1-score').textContent
  const total = parseFloat(teamOneScore) + 1
  console.log(total)
  document.querySelector('.team-1-score').textContent = total
}

const subtractFromTeamOneScore = subtractFromScore => {
  console.log(subtractFromScore + 'button clicked')
  const teamOneScore = document.querySelector('.team-1-score').textContent
  const total = parseFloat(teamOneScore) - 1
  console.log(total)
  document.querySelector('.team-1-score').textContent = total
}

const addtoTeamTwoScore = addToScore => {
  console.log(addToScore + 'button clicked')
  const teamTwoScore = document.querySelector('.team-2-score').textContent
  const total = parseFloat(teamTwoScore) + 1
  console.log(total)
  document.querySelector('.team-2-score').textContent = total
}

const subtractFromTeamTwoScore = subtractFromScore => {
  console.log(subtractFromScore + 'button clicked')
  const teamTwoScore = document.querySelector('.team-2-score').textContent
  const total = parseFloat(teamTwoScore) - 1
  console.log(total)
  document.querySelector('.team-2-score').textContent = total
}

/************************************************************/
document.addEventListener('DOMContentLoaded', main)
/************************************************************/

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeamOneName)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeamTwoName)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addtoTeamOneScore)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractFromTeamOneScore)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addtoTeamTwoScore)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractFromTeamTwoScore)
