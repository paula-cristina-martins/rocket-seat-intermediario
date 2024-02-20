import { Modal } from "../js/modal.js"
import { AlertError } from "./alert-error.js"
import { CalculateIMC, NotANumber } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = NotANumber(weight) || NotANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = CalculateIMC(weight, height)
  DisplayResultMessage(result)
}

function DisplayResultMessage(result) {
  Modal.message.innerText = `Seu IMC é de ${result}`
  Modal.open()
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
