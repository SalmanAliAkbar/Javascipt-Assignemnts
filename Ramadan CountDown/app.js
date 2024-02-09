
let ramdanDate = new Date("03-12-2024 00:00:00").getTime();

function ramadanCount() {
    let currentDate = new Date().getTime();

    let diff = ramdanDate - currentDate;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    let second = Math.floor(diff % (1000 * 60) / 1000);

    let d = (days < 10) ? "0"+days : days
    let h = (hours < 10) ? "0"+hours : hours
    let m = (minutes < 10) ? "0"+minutes : minutes
    let s = (second < 10) ? "0"+second : second

    document.getElementById("days").innerHTML = d + " " + "DAYS"
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s
}

setInterval(function () {
    ramadanCount();

},1000)