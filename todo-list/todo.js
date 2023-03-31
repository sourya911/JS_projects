const addtask = document.querySelector("input")
// console.log(addtask)
const add = document.querySelector("#add")
//  console.log(add)
const cont = document.querySelector(".new")
console.log(cont)

add.addEventListener("click",()=>{

    let div = document.createElement("div");
    div.classList.add("newtask");

    let li =document.createElement("li")
    li.innerHTML=`${addtask.value}`
    div.appendChild(li)

    let btn1=document.createElement("button")
    btn1.innerHTML="<i class='fa-solid fa-check'></i>"
    btn1.classList.add("check");
    div.appendChild(btn1)
    

    let btn2=document.createElement("button")
    btn2.innerHTML="<i class='fa-solid fa-trash-can'></i>"
    btn2.classList.add("delete");
    div.appendChild(btn2)

    if(addtask.value==""){
        alert("enter message")
    }
    else{
        cont.appendChild(div)
    }


    addtask.value=" ";

    btn1.addEventListener("click",()=>{
        btn1.parentElement.style.textDecoration="line-through"
    })

    btn2.addEventListener("click",(e)=>{
        e.target.parentElement.parentElement.remove();
    })
})
