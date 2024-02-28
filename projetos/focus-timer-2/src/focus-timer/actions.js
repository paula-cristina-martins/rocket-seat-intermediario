import state from "./states.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"
import * as el from "./elements.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")
  timer.countDown()
  sounds.buttonPressAudio.play()
  if (!state.isRunning) {
    resetSounds()
  }
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
  resetSounds()
}

export function toggleMinutesPlus() {
  if (state.minutes < 55 || (state.minutes == 55 && state.seconds == 0)) {
    state.minutes = state.minutes + 5
  }
  timer.updateDisplay()
}

export function toggleMinutesMinus() {
  if (state.minutes > 5 || (state.minutes == 5 && state.seconds > 0)) {
    state.minutes = state.minutes - 5
  }
  timer.updateDisplay()
}

export function forestMusic() {
  execute()
  el.isForest.classList.add("active")
  sounds.floresta.play()
}

export function rainMusic() {
  execute()
  el.isRain.classList.add("active")
  sounds.chuva.play()
}

export function coffeeMachineMusic() {
  execute()
  el.isCoffeeMachine.classList.add("active")
  sounds.cafeteria.play()
}

export function fireplaceMusic() {
  execute()
  el.isFireplace.classList.add("active")
  sounds.lareira.play()
}

export function resetSounds() {
  sounds.floresta.pause()
  sounds.chuva.pause()
  sounds.cafeteria.pause()
  sounds.lareira.pause()
}

export function resetStyle() {
  el.isForest.classList.remove("active")
  el.isRain.classList.remove("active")
  el.isCoffeeMachine.classList.remove("active")
  el.isFireplace.classList.remove("active")
}

export function execute() {
  resetSounds()
  resetStyle()
}
