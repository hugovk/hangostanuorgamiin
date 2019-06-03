const startDate = new Date("Jun 3, 2019 11:25:00").getTime();
const endDate = new Date("Jun 8, 2019 14:55:00").getTime();

const calc = function(t) {
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((t % (1000 * 60)) / 1000);
    return {days: days, hours: hours, mins: mins, secs: secs};
};

var timer = setInterval(function() {

    let now = new Date().getTime();
    let t = endDate - now;
    let t2 = now - startDate;

    if (t >= 0) {

        var time = calc(t);

        document.getElementById("timer-days").innerHTML = time.days +
        "<span class='label'>d</span>";

        document.getElementById("timer-hours").innerHTML = ("0"+time.hours).slice(-2) +
        "<span class='label'>h</span>";

        document.getElementById("timer-mins").innerHTML = ("0"+time.mins).slice(-2) +
        "<span class='label'>m</span>";

        document.getElementById("timer-secs").innerHTML = ("0"+time.secs).slice(-2) +
        "<span class='label'>s</span>";

        var time = calc(t2);

        document.getElementById("timer-days2").innerHTML = time.days +
        "<span class='label'>d</span>";

        document.getElementById("timer-hours2").innerHTML = ("0"+time.hours).slice(-2) +
        "<span class='label'>h</span>";

        document.getElementById("timer-mins2").innerHTML = ("0"+time.mins).slice(-2) +
        "<span class='label'>m</span>";

        document.getElementById("timer-secs2").innerHTML = ("0"+time.secs).slice(-2) +
        "<span class='label'>s</span>";

    } else {

        document.getElementById("timer").innerHTML = "The countdown is over!";

    }

}, 1000);
