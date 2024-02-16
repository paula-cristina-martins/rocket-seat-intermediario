const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const openCookie = document.getElementById("openCookie")
const resetCookie = document.getElementById("btnReset")

const phrases = [
  "A vida é como uma caixa de chocolates, você nunca sabe o que vai encontrar.",
  "A persistência é o caminho do êxito.",
  "Nada acontece a menos que sonhemos primeiro.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "O importante não é vencer todos os dias, mas lutar sempre.",
  "A felicidade não é algo pronto. Ela vem das nossas próprias ações.",
  "O que me preocupa não é o grito dos maus, mas o silêncio dos bons.",
  "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
]

let randomIndex = Math.floor(Math.random() * phrases.length)

openCookie.addEventListener("click", handleClick)
resetCookie.addEventListener("click", handleClick)

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen1.classList.contains("screen1")) {
    handleClick()
  }
})

function handleClick() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  phrasesGeneration()
}

function phrasesGeneration() {
  document.querySelector(
    ".screen2 .message p"
  ).innerText = `${phrases[randomIndex]}`
  randomIndex = Math.floor(Math.random() * phrases.length)
}
