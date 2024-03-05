export function verifyBackground(pathname) {
  const verifySelectorBg = document.querySelector("#type-check")

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
  })

  if (pathname == "/") {
    verifySelectorBg.classList.add("image-home")
    document.querySelector("#nav-home").classList.add("active")
  } else if (pathname == "/universe") {
    verifySelectorBg.classList.remove("image-home")
    verifySelectorBg.classList.add("image-universe")

    document.querySelector("#nav-universe").classList.add("active")
  } else if (pathname == "/explorer") {
    verifySelectorBg.classList.remove("image-home", "image-universe")
    verifySelectorBg.classList.add("image-explorer")

    document.querySelector("#nav-explorer").classList.add("active")
  }
}
