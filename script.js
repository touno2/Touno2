let alarmTime = "";

let alarmPlayed = false;


// 時計更新
function updateClock(){

    const now = new Date();

    const h = String(now.getHours()).padStart(2,"0");
    const m = String(now.getMinutes()).padStart(2,"0");
    const s = String(now.getSeconds()).padStart(2,"0");


    document.getElementById("clock").textContent =
    `${h}:${m}:${s}`;


    if(alarmTime){

        const current =
        `${h}:${m}`;


        if(current === alarmTime && !alarmPlayed){

            document.getElementById("status").textContent =
            "🔔 アラーム中";


            const sound =
            document.getElementById("alarmSound");


            sound.play();


            alarmPlayed = true;

        }

    }

}


setInterval(updateClock,1000);

updateClock();



// アラーム設定
document
.getElementById("setAlarm")
.onclick = function(){


    alarmTime =
    document.getElementById("alarmTime").value;


    alarmPlayed = false;


    if(alarmTime){

        document.getElementById("status").textContent =
        "設定中：" + alarmTime;

    }

};
