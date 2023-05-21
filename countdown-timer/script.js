const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minEl=document.getElementById('mins');
const secEl=document.getElementById('seconds');

const happyDays='1 Jan 2024';
function countdown(){
    const newDate=new Date(happyDays);
    const currentDate=new Date();
const totalSeconds=(newDate-currentDate)/1000;

const days=Math.floor(totalSeconds/3600/24);
const hours=Math.floor(totalSeconds/3600)%24;

const min=Math.floor(totalSeconds/60)%60;
const sec=Math.floor(totalSeconds)%60;
daysEl.innerHTML=formatTime(days);
hoursEl.innerHTML=formatTime(hours);
minEl.innerHTML=formatTime(min);
secEl.innerHTML=formatTime(sec);

    console.log(days,hours,min,sec);
}
function formatTime(time){
    return time<10?`0${time}`:time;
}//if time small of 10,put a 0 before it
countdown();
setInterval(countdown,1000);