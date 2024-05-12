const year = document.querySelector("#currentyear");
const date = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = `${today.getFullYear()}`;
date.innerHTML= `Last modification ${today.toLocaleString('en-US', { timeZoneName: 'short' })}`;

function calculateWindChill(temp, windspeed) {
    // console.log("temp:" + temp);
    // console.log("windspeed:" + windspeed);
    return (13.12 + 0.6215*temp - 11.37 * Math.pow(windspeed, 0.16) + 0.3965 * temp * Math.pow(windspeed, 0.16)).toFixed(2);
}

let temp = 32;
let windspeed = 8;
let windchill = "N/A";

if (temp <= 10 && windspeed >= 4.8) {
    windchill = calculateWindChill(temp, windspeed).toString() + "°C";
}

document.getElementById("windchill").textContent = windchill;