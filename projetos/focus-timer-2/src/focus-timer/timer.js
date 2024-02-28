import states from "./states.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"
import { kitchenTimer } from "./sounds.js"

export function countDown() {
  clearTimeout(states.countDownId)

  if (!states.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    reset()
    kitchenTimer.play()
    return
  }

  updateDisplay(minutes, seconds)

  states.countDownId = setTimeout(() => countDown(), 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? states.minutes
  seconds = seconds ?? states.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}
