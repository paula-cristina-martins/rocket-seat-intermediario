import { controls, music } from "./elements.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"
import states from "./states.js"
import { updateDisplay } from "./timer.js"

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })

  music.addEventListener("click", (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = ""
  })

  el.minutes.onkeypress = () => /\d/.test(event.key)
  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    states.minutes = time
    states.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute("contenteditable")
  })
}
