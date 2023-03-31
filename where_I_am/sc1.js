const btn = document.getElementById("text");
const clos = document.getElementById("close");
const container = document.getElementById("container");

btn.addEventListener("click" , ()=>{
    container.style.display="block";
})

clos.addEventListener("click",()=>{
    container.style.display="none";

})

window.addEventListener("click",(e)=>{
if(e.target==container)
    container.style.display="none";

})
