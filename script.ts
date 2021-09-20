
document.getElementById("calcButton").onclick = () => {
    
    let form: HTMLFormElement = document.getElementById("form") as HTMLFormElement; // kikeresi a form taget
    let data: FormData = new FormData(form); // form tag adataiból adatokat csinál
    
    let distanceWgt: HTMLInputElement = document.getElementsByName("Distance")[0] as HTMLInputElement;
    let consumptionWgt: HTMLInputElement = document.getElementsByName("Consumption")[0] as HTMLInputElement;
    let priceWgt: HTMLInputElement = document.getElementsByName("Price")[0] as HTMLInputElement;

    distanceWgt.dataset.validation = "default";
    consumptionWgt.dataset.validation = "default";
    priceWgt.dataset.validation = "default";

    // convert to numbers
    let distance_n: number = parseInt(data.get("Distance").toString());
    let consumption_n: number = parseInt(data.get("Consumption").toString());
    let price_n: number = parseInt(data.get("Price").toString());

    let allDataIsValid: boolean = distance_n > 0 && consumption_n > 0 && price_n > 0;
    let distanceIsValid: boolean = distance_n > 0;
    let consumptionIsValid: boolean = consumption_n > 0;
    let priceIsValid: boolean = price_n > 0;

    // result text
    let finalCost: string;

    if (allDataIsValid) {
        let cost: number = Math.ceil(distance_n * consumption_n / 100 * price_n);
        finalCost = cost.toString();
        let finalCostWgt: HTMLLabelElement = document.getElementById("finalCostLabel") as HTMLLabelElement;
        finalCostWgt.innerText = "Az útiköltség " + finalCost + " Forint";
        finalCostWgt.style.color = "rgb(84, 84, 218)";
        finalCostWgt.style.textDecoration = "underline";
    }
    else {
        // warning message
        if (distance_n <= 0 || consumption_n <= 0 || price_n <= 0)
        {
            let warning: HTMLLabelElement = document.getElementById("finalCostLabel") as HTMLLabelElement;
            warning.innerText = "Kérjük, adjon meg 0-nál nagyobb értékeket a pirossal jelölt mező(k)nek!";
            warning.style.color = "red";
            warning.style.textDecoration = "none";
        }
        if (distanceIsValid === false)
        {
            distanceWgt.dataset.validation = "invalid";
        }
        if (consumptionIsValid === false)
        {
            consumptionWgt.dataset.validation = "invalid";
        }
        if (priceIsValid === false)
        {
            priceWgt.dataset.validation = "invalid";
        }
    }
};



document.getElementById("calcButton2").onclick = () => {
    
    let form2: HTMLFormElement = document.getElementById("form2") as HTMLFormElement; // kikeresi a form taget
    let data2: FormData = new FormData(form2); // form tag adataiból adatokat csinál

    let distance2Wgt: HTMLInputElement = document.getElementsByName("Distance2")[0] as HTMLInputElement;
    let velocityWgt: HTMLInputElement = document.getElementsByName("Velocity")[0] as HTMLInputElement;
    
    distance2Wgt.dataset.validation = "default";
    velocityWgt.dataset.validation = "default";
    
    // convert to numbers
    let distance2_n: number = parseInt(data2.get("Distance2").toString());
    let velocity_n: number = parseInt(data2.get("Velocity").toString());
    let minute_n: number = parseInt(data2.get("Minute").toString());
    let occasion_n: number = parseInt(data2.get("Occasion").toString());

    let allDataIsValid: boolean = distance2_n > 0 && velocity_n > 0;
    let distance2IsValid: boolean = distance2_n > 0;
    let velocityIsValid: boolean = velocity_n > 0;

    // result texts
    let finalTime_hour: string;
    let finalTime_minute: string;

    if (allDataIsValid) {
        let time: number = distance2_n / velocity_n + (minute_n * occasion_n) / 60;
        let time_hour: number = Math.floor(time);
        finalTime_hour = time_hour.toString();
        (document.getElementById("finalTimeLabel_hour") as HTMLInputElement).value = finalTime_hour;
        let time_minute: number = Math.round((time - time_hour) * 60);
        finalTime_minute = time_minute.toString();
        (document.getElementById("finalTimeLabel_minute") as HTMLInputElement).value = finalTime_minute;

        let warning2: HTMLLabelElement = document.getElementById("finalCostLabel2") as HTMLLabelElement;
        warning2.style.display = "none";
    }
    else {
        // warning message
        if (distance2_n <= 0 || velocity_n <= 0) {
            let warning2: HTMLLabelElement = document.getElementById("finalCostLabel2") as HTMLLabelElement;
            warning2.style.display = "block";
            warning2.innerText = "Kérjük, adjon meg 0-nál nagyobb értékeket a pirossal jelölt mező(k)nek!";
            warning2.style.color = "red";
        }
        if (distance2IsValid === false)
        {
            distance2Wgt.dataset.validation = "invalid";
        }
        if (velocityIsValid === false)
        {
            velocityWgt.dataset.validation = "invalid";
        }
    }    
};

