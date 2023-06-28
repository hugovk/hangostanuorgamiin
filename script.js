const activeAttempt = false;
const startDateText = "2021-06-21 09:10"; // Current attempt or last record
const startDate = new Date(startDateText).getTime();

// Samuli Mäkinen's record: 61 hours and 38 minutes
// const recordHours = 61;
// const recordMinutes = 38;
// const recordEndDate = new Date("Jun 6, 2019 01:03:00").getTime();

// Timo Petänen's record: 61 hours and 6 minutes
const recordHours = 61;
const recordMinutes = 6;
const recordEndDate = new Date("2021-06-23 22:16").getTime();

// Note: Not DST-change safe
let endDate = new Date(startDate + ((recordHours * 60) + recordMinutes) * 60 * 1000);

const year = endDate.getFullYear();
const month = '0' + (endDate.getMonth() + 1); // January == 0
const day = '0' + endDate.getDate();
const hours = endDate.getHours();
const minutes = '0' + endDate.getMinutes();
const seconds = '0' + endDate.getSeconds();

const endDateText = year + '-' + month.substr(-2) + '-' + day.substr(-2) + ' ' + hours + ':' + minutes.substr(-2);

endDate = endDate.getTime();

document.getElementById("departure").innerHTML = startDateText;
document.getElementById("deadline").innerHTML = endDateText;

const calc = function(t) {
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((t % (1000 * 60)) / 1000);
    return {days: days, hours: hours, mins: mins, secs: secs};
};

const update = function() {
    let t;
    let t2;
    if (activeAttempt) {
        let now = new Date().getTime();
        t = endDate - now;
        t2 = now - startDate;
        if (t < 0) {
            document.getElementById("timer").innerHTML = "The countdown is over!";
            document.getElementById("timer2").innerHTML = "The countdown is over!";
            return;
        }
    } else {
        t = endDate - recordEndDate;
        t2 = recordEndDate - startDate;
    }

    if (t2 < 0) {
        // Before departure
        t = endDate - startDate;
        t2 = 0;
    }

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

};

update();
if (activeAttempt) {
    setInterval(update, 1000);
}
