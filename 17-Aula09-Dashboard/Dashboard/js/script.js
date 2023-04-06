let troca = document.querySelector(".troca");//mudando para dark
let body = document.querySelector("body");//dark
let header = document.querySelector("header")//encolhendo
let main = document.querySelector("main")
troca.addEventListener("click", ()=>{
    troca.classList.toggle("active");
    body.classList.toggle("dark")
    header.classList.toggle("active")
    main.classList.toggle("active")
})