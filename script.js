"use strict";
document.getElementById("calcButton").onclick = () => {
    let form = document.getElementById("form"); // kikeresi a form taget
    let data = new FormData(form); // form tag adataiból adatokat csinál
    let distanceWgt = document.getElementsByName("Distance")[0];
    let consumptionWgt = document.getElementsByName("Consumption")[0];
    let priceWgt = document.getElementsByName("Price")[0];
    distanceWgt.dataset.validation = "default";
    consumptionWgt.dataset.validation = "default";
    priceWgt.dataset.validation = "default";
    // convert to numbers
    let distance_n = parseInt(data.get("Distance").toString());
    let consumption_n = parseInt(data.get("Consumption").toString());
    let price_n = parseInt(data.get("Price").toString());
    let allDataIsValid = distance_n > 0 && consumption_n > 0 && price_n > 0;
    let distanceIsValid = distance_n > 0;
    let consumptionIsValid = consumption_n > 0;
    let priceIsValid = price_n > 0;
    // result text
    let finalCost;
    if (allDataIsValid) {
        let cost = Math.ceil(distance_n * consumption_n / 100 * price_n);
        finalCost = cost.toString();
        let finalCostWgt = document.getElementById("finalCostLabel");
        finalCostWgt.innerText = "Az útiköltség " + finalCost + " Forint";
        finalCostWgt.style.color = "rgb(84, 84, 218)";
        finalCostWgt.style.textDecoration = "underline";
    }
    else {
        // warning message
        if (distance_n <= 0 || consumption_n <= 0 || price_n <= 0) {
            let warning = document.getElementById("finalCostLabel");
            warning.innerText = "Kérjük, adjon meg 0-nál nagyobb értékeket a pirossal jelölt mező(k)nek!";
            warning.style.color = "red";
            warning.style.textDecoration = "none";
        }
        if (distanceIsValid === false) {
            distanceWgt.dataset.validation = "invalid";
        }
        if (consumptionIsValid === false) {
            consumptionWgt.dataset.validation = "invalid";
        }
        if (priceIsValid === false) {
            priceWgt.dataset.validation = "invalid";
        }
    }
};
document.getElementById("calcButton2").onclick = () => {
    let form2 = document.getElementById("form2"); // kikeresi a form taget
    let data2 = new FormData(form2); // form tag adataiból adatokat csinál
    let distance2Wgt = document.getElementsByName("Distance2")[0];
    let velocityWgt = document.getElementsByName("Velocity")[0];
    distance2Wgt.dataset.validation = "default";
    velocityWgt.dataset.validation = "default";
    // convert to numbers
    let distance2_n = parseInt(data2.get("Distance2").toString());
    let velocity_n = parseInt(data2.get("Velocity").toString());
    let minute_n = parseInt(data2.get("Minute").toString());
    let occasion_n = parseInt(data2.get("Occasion").toString());
    let allDataIsValid = distance2_n > 0 && velocity_n > 0;
    let distance2IsValid = distance2_n > 0;
    let velocityIsValid = velocity_n > 0;
    // result texts
    let finalTime_hour;
    let finalTime_minute;
    if (allDataIsValid) {
        let time = distance2_n / velocity_n + (minute_n * occasion_n) / 60;
        let time_hour = Math.floor(time);
        finalTime_hour = time_hour.toString();
        document.getElementById("finalTimeLabel_hour").value = finalTime_hour;
        let time_minute = Math.round((time - time_hour) * 60);
        finalTime_minute = time_minute.toString();
        document.getElementById("finalTimeLabel_minute").value = finalTime_minute;
        let warning2 = document.getElementById("finalCostLabel2");
        warning2.style.display = "none";
    }
    else {
        // warning message
        if (distance2_n <= 0 || velocity_n <= 0) {
            let warning2 = document.getElementById("finalCostLabel2");
            warning2.style.display = "block";
            warning2.innerText = "Kérjük, adjon meg 0-nál nagyobb értékeket a pirossal jelölt mező(k)nek!";
            warning2.style.color = "red";
        }
        if (distance2IsValid === false) {
            distance2Wgt.dataset.validation = "invalid";
        }
        if (velocityIsValid === false) {
            velocityWgt.dataset.validation = "invalid";
        }
    }
};
