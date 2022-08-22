export default function Timer({
  minutesDisplay,
  secondsDisplay,
}) {

  let timerTimeout

  // função p/ colocar 0 na frente do número quando chegar a menos que 10
  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  // função pra iniciar a contagem regressiva 
  function countdown() {
    timerTimeout = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      updateDisplay(minutes, 0)
      if (minutes <= 0 && seconds <= 0) {
        updateDisplay()
        return
      }
      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
      updateDisplay(minutes, String(seconds - 1))
      countdown()
    }, 1000)
  }

  // função p/ adicionar +5min
  function plus() {
		updateDisplay(
			Number(minutesDisplay.textContent) + 5,
			Number(secondsDisplay.textContent)
		)
	}

  // função p/ remover -5min
	function minus() {
		let minutes = Number(minutesDisplay.textContent)
		let seconds = Number(secondsDisplay.textContent)

		if (minutes > 5) {
			updateDisplay(minutes - 5, seconds)
		} else {
			updateDisplay(0, seconds)
		}
	}  


  // função p/ parar o timer 
  function hold() {
    clearTimeout(timerTimeout)
  }

  return {
    countdown,
    updateDisplay,
    hold,
    minus,
    plus
  }
}
