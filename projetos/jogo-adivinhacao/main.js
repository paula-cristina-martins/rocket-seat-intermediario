const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let adivinhe = Math.round(Math.random() * 10)
let tentativas = 1

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (
    inputNumber.value !== "" &&
    Number(inputNumber.value) >= 0 &&
    Number(inputNumber.value) <= 10
  ) {
    if (Number(inputNumber.value) == adivinhe) {
      toggleScreen()

      document.querySelector(
        ".screen2 h2"
      ).innerText = `Parabéns! Você adivinhou o número em ${tentativas} tentativas!`
    }

    inputNumber.value = ""
    tentativas += 1
  } else {
    alert(
      "É necessário a inserção de um número! \nOs números permitidos são de 0 a 10."
    )
  }
}

function handleResetClick() {
  toggleScreen()
  tentativas = 1
  adivinhe = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
