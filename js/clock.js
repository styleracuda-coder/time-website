function updateClock() {

const now = new Date();

const time = now.toLocaleTimeString();
const date = now.toLocaleDateString();
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

document.getElementById("clock").innerHTML = time;
document.getElementById("date").innerHTML = date;
document.getElementById("timezone").innerHTML = timezone;

}

setInterval(updateClock,1000);

updateClock();
