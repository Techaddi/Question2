
class My
{
// method to play the alarm ring tone
ringBell() {
    audio.play();
}

// This mrthod will run whenever alarm is set from the UI
setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    var alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    document.getElementById("set").innerHTML=`Alarm set for ${alarmDate}<button id="delete" type="submit" class="btn btn-primary">Delete</button>`;
    var now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
       var ide = setTimeout(() => {
            console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
    }
}
deleteAlarme(e)
{
    e.preventDefault();
    clearTimeout(ide);
}
}
var my=new My();

const alarmSubmit = document.getElementById('alarmSubmit');
const deleteAlarm=document.getElementById('delete');
document.getElementById("time").innerHTML = `${new Date()}`;

// Add an event listener to the submit button
alarmSubmit.addEventListener('click', my.setAlarm);
deleteAlarm.addEventListener('click',my.deleteAlarme);

var audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

