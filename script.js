const transTime=document.querySelector('.sec-hand')
const transmin=document.querySelector('.min-hand')
const transhour=document.querySelector('.hour-hand')
function runTime(){
const now = new Date();
const seconds=now.getSeconds();
const secondDegree=((seconds/60)*360) + 90;
transTime.style.transform=`rotate(${secondDegree}deg)`
console.log(seconds)
const minutes=now.getMinutes();
const minutesDegree=((minutes/60)*360) + 90;
transmin.style.transform=`rotate(${minutesDegree}deg)`
console.log(minutes)
const hours=now.getHours();
const hourDegree=((hours/60)*360) + 90;
transhour.style.transform=`rotate(${hourDegree}deg)`
console.log(hours)
}
setInterval(runTime,1000)