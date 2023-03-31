const play = document.querySelector(".playpause")
// console.log(play)
const reset=document.querySelector(".repeat");


let status1="stopped";
let val=null;

let sec =0;
let min =0;
let hr =0;

let leadsec =0;
let leadmin =0;
let leadhr =0;


function stopwatch(){
 
    sec++;
    if(sec/60 ===1 ){
        sec=0;
        min++;

        if(min/60 ===1){
            min = 0;
            hr++;
        }
    }

    if(sec<10){
        leadsec ="0"+sec.toString();
    }
    else{
        leadsec=sec;
    }

    if(min<10){
        leadmin ="0"+min.toString();
    }
    else{
        leadmin=min;
    }

    if(hr<10){
        leadhr ="0"+hr.toString();
    }
    else{
        leadhr=hr;
    }

    document.querySelector("#timer").innerHTML =
    leadhr +":"+ leadmin+":"+ leadsec;
}


play.addEventListener("click",function(){
    if(status1==="stopped"){
        val = window.setInterval(stopwatch,1000)
        document.querySelector(".playpause").innerHTML=` <i class="fa-solid fa-pause" id="pause"></i>`
        status1="started";
    }
    else{
        window.clearInterval(val);
        document.querySelector(".playpause").innerHTML=` <i class="fa-solid fa-play" id="play"></i>`
        status1="stopped";
    }
})

reset.addEventListener("click",function(){
    window.clearInterval(val);
    sec=0;
    min=0;
    hr=0;

    document.querySelector("#timer").innerHTML="00:00:00"
})