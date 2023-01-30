//Input Variables
const height = document.querySelector("#height");
const age = document.querySelector("#age");
const weight = document.querySelector("#weight");

const female = document.querySelector("#female");
const male = document.querySelector("#male");

const activityList = document.getElementById("activityList");

const btn = document.querySelector(`input[type="submit"]`);

//Output Variables

const grundKcal = document.querySelector("#grundKcal");
const grundKJ = document.querySelector("#grundKJ");

const gesamtKcal = document.querySelector("#gesamtKcal");
const gesamtKJ = document.querySelector("#gesamtKJ");

//function

function calc(event) {
    event.preventDefault();
    let heightInput = Number(height.value);
    let ageInput = Number(age.value);
    let activityListInput = Number(activityList.value);
    let weightInput = Number(weight.value);

    let grundumsatz = "";

    if (male.checked){
        grundumsatz = 664.7 + (13.7 * weightInput) + (5 * heightInput) - (6.8 * ageInput);
    }else{
        grundumsatz = 655.1 + (9.6 * weightInput) + (1.8 * heightInput) - (4.7 * ageInput);
    }

    let gesamtumsatz = grundumsatz * activityListInput;
    
    grundKcal.innerHTML = grundumsatz.toFixed(2) + " kcal";
    grundKJ.innerHTML = (grundumsatz * 4.184).toFixed(2) + " KJ";

    gesamtKcal.innerHTML = gesamtumsatz.toFixed(2) + " kcal";
    gesamtKJ.innerHTML = (gesamtumsatz * 4.184).toFixed(2) + " KJ";
}

btn.addEventListener("click", calc)