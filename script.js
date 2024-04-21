const hour = document.querySelector(".hour");
const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const start = document.querySelector(".toggle-button");
const restart = document.querySelector(".restart");


let counter;
let minuteStart =0;
let secondStart =0;
let hourStart =0;
start.addEventListener('click',function(){
    restart.classList.add("active");
    if(start.textContent == "START")
    {
    start.textContent='PAUSE';
    counter = setInterval(startTimer , 1000);
    function startTimer(){
        secondStart+=1;
        if(minuteStart == 60)
        {
            console.log(hourStart);
            hourStart+=1;
            hour.textContent = hourStart;
            minute.textContent = '00';
            second.textContent = '00';
            minuteStart=0;
            secondStart=0;
        }
        if(secondStart % 60 ==0)
        {
            minuteStart+=1;
            minute.textContent = minuteStart;
            second.textContent = '00';
            secondStart=0;
        }
        if(secondStart >9){
            second.textContent = secondStart;
        }
        else{
            second.textContent ='0'+ secondStart;
        }

    }
    }else{
        clearInterval(counter);
        start.textContent='START';
    }
});

restart.addEventListener('click',function(){
     clearInterval(counter);
     minuteStart =0;
     secondStart =0;
     hourStart =0;
     minute.textContent = '00';
     second.textContent = '00';
     hour.textContent = '00';
     start.textContent='PAUSE';
  

})

