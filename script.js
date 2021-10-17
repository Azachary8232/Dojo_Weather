

function burbank(element){
    alert("Run! Your city is on FIRE!!!");
}

function chicago(element){
    alert("Chicago: Where the bullets fly like birds!");
}

function dallas(element){
    alert("Dallas, Melt much?");
}

var cookies = document.querySelector("#cookieAlert");

function removeCookie(){
    cookies.remove();
}

var todayHigh = document.querySelector("#todayHigh");
var todayLow = document.querySelector("#todayLow");
var tomorrowHigh = document.querySelector("#tomorrowHigh");
var tomorrowLow = document.querySelector("#tomorrowLow");
var fridayHigh = document.querySelector("#fridayHigh");
var fridayLow = document.querySelector("#fridayLow");
var saturdayHigh = document.querySelector("#saturdayHigh");
var saturdayLow = document.querySelector("#saturdayLow");

function cToF(){
    todayHigh.innerHTML= 75 + "&#176;";
    todayLow.innerHTML= 65 + "&#176;";
    tomorrowHigh.innerHTML= 80 + "&#176;";
    tomorrowLow.innerHTML= 66 + "&#176;";
    fridayHigh.innerHTML= 69 + "&#176;";
    fridayLow.innerHTML= 61 + "&#176;";
    saturdayHigh.innerHTML= 78 + "&#176;";
    saturdayLow.innerHTML= 70 + "&#176;";
}

