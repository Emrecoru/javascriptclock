let userName = prompt("Lütfen adınızı giriniz")
let nameDOM = document.querySelector("#myName")
nameDOM.innerHTML = userName

let date = new Date();

var gün;

switch (date.getDay()) {
    case 0:
        gün = "Pazar"
        break;
    case 1:
        gün = "Pazartesi"
        break;
    case 2:
        gün = "Salı"
        break;
    case 3:
        gün = "Çarşamba"
        break;
    case 4:
        gün = "Perşembe"
        break;
    case 5:
        gün = "Cuma"
        break;
    case 6:
        gün = "Cumartesi"
        break;
}


function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // let session = "AM";


    // if(hh > 12){
    //     session = "PM";
    //  }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " /*+ session*/ + gün;

    document.querySelector(".clock").innerText = time;
    var t = setTimeout(function () { currentTime() }, 1000);

}

currentTime();