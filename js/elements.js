const toggleSun = document.querySelector(".toggle-button-sun")
const toggleMoon = document.querySelector(".toggle-button-moon")

const forestButton = document.querySelector(".card-1")
const rainButton  = document.querySelector(".card-2")
const coffeeButton = document.querySelector(".card-3")
const fireButton = document.querySelector(".card-4")

const forestVolume = document.querySelector(".forest-volume")
const rainVolume = document.querySelector(".rain-volume")
const coffeeVolume = document.querySelector(".coffee-volume")
const fireVolume = document.querySelector(".fire-volume")

const play = document.querySelector(".play")
const stop = document.querySelector(".stop")
const add = document.querySelector(".add")
const less = document.querySelector(".less")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

export {
  toggleMoon,
  toggleSun,
  fireButton,
  forestButton,
  coffeeButton,
  rainButton,
  forestVolume,
  coffeeVolume,
  rainVolume,
  fireVolume,
  play,
  stop,
  add,
  less,
  minutesDisplay,
  secondsDisplay
}