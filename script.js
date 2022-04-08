const b = document.querySelector(".botao");
const a = document.querySelector(".imgs");
const apagar = document.querySelector(".apagou");

b.addEventListener("click",()=>{
b.classList.toggle("active");

apagar.classList.toggle("active");

})

b.addEventListener("click",()=>{

 a.classList.toggle("active");

})

