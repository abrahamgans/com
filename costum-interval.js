"use strict";

function countdowntime(deadline) {

    document.getElementById("countdowntime").innerHTML = "Retrieving Data...";

    var deadline = new Date(deadline).getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var t = deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);

        var filtertimer = (days == 0 ? "" : days + " Days ") + (hours == 0 ? "" : hours + " Hour ") + (minutes == 0 ? "" : minutes + " Mins ") + seconds + " Sec ";

        var myEle = document.getElementById("countdowntime");
        if (myEle) {
            document.getElementById("countdowntime").innerHTML = filtertimer;
        } else {
            clearInterval(x);
        }

        if (t < 0) {
            clearInterval(x);
            document.getElementById("countdowntime").innerHTML = "Your Usage Time Has Ended";
        }
    }, 1000);
}