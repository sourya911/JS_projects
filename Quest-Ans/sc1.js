 console.log("k")

 const que =document.getElementsByClassName("a-cont");

 for(let i=0;i<que.length;i++){
   que[i].addEventListener("click",function(){
    // this.classList.toggle("active");
    this.classList.toggle("active");
   })
 }