import Timer from './timer.js'
import Sounds from './sounds.js'
import {
  forestButton,
  fireButton,
  rainButton,
  coffeeButton,
  toggleMoon,
  toggleSun,
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
} from './elements.js'

const sounds = Sounds()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
})

// funções p/ fazer os botões funcionarem 
play.addEventListener('click', function() {
  timer.countdown()
})

stop.addEventListener("click", function() {
  timer.hold()
})

add.addEventListener("click", function() {
  timer.plus()
})

less.addEventListener("click", function() {
  timer.minus()
})

// função p/ trocar o tema
function toggleTheme() {
  document.body.classList.toggle('dark')
  toggleSun.classList.toggle('hide')
  toggleMoon.classList.toggle('hide')
}

toggleSun.addEventListener('click', toggleTheme)
toggleMoon.addEventListener('click', toggleTheme)


// função p/ desativar um card ativo quando outro for clicado 
function toggleActiveClass(el) {
  const allActiveButtons = document.querySelectorAll('button.active')

  el.classList.toggle('active')

  // desativa todos os botões menos o elemento clicado
  allActiveButtons.forEach(activeButton => {
    activeButton.classList.remove('active')
  })
}


//funções p/ fazer o range funcionar 
forestVolume.addEventListener('click', function (e) {
  e.stopPropagation()
  sounds.forestSound.volume = forestVolume.value / 100
})
rainVolume.addEventListener('click', function (e) {
  e.stopPropagation()
  sounds.rainSound.volume = rainVolume.value / 100
})
coffeeVolume.addEventListener('click', function (e) {
  e.stopPropagation()
  sounds.coffeeSound.volume = coffeeVolume.value / 100
})
fireVolume.addEventListener('click', function (e) {
  e.stopPropagation()
  sounds.fireSound.volume = fireVolume.value / 100
})


// funções p/ tocar os sons dos cards
forestButton.addEventListener('click', function (e) {
  if (sounds.forestSound.paused) {
    sounds.forestSound.play()
    sounds.rainSound.pause()
    sounds.coffeeSound.pause()
    sounds.fireSound.pause()
  } else {
    sounds.forestSound.pause()
  }
  toggleActiveClass(e.currentTarget)
})

rainButton.addEventListener('click', function (e) {
  if (sounds.rainSound.paused) {
    sounds.rainSound.play()
    sounds.forestSound.pause()
    sounds.coffeeSound.pause()
    sounds.fireSound.pause()
  } else {
    sounds.rainSound.pause()
  }
  toggleActiveClass(e.currentTarget)
})

coffeeButton.addEventListener('click', function (e) {
  if (sounds.coffeeSound.paused) {
    sounds.coffeeSound.play()
    sounds.forestSound.pause()
    sounds.rainSound.pause()
    sounds.fireSound.pause()
  } else {
    sounds.coffeeSound.pause()
  }
  toggleActiveClass(e.currentTarget)
})

fireButton.addEventListener('click', function (e) {
  if (sounds.fireSound.paused) {
    sounds.fireSound.play()
    sounds.forestSound.pause()
    sounds.coffeeSound.pause()
    sounds.rainSound.pause()
  } else {
    sounds.fireSound.pause()
  }
  toggleActiveClass(e.currentTarget)
})
