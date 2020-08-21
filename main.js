document.querySelector(".navburger").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("showMenu")
})

document.querySelector(".klattringLink").addEventListener("click", () => {
  document.querySelector(".klattring").classList.toggle("show")
})

document.querySelector(".personerLink").addEventListener("click", ()=>{
  document.querySelector(".personer").classList.toggle("show")
})