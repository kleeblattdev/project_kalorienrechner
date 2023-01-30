//Input Variables
const height = document.querySelector("#height");
let heightInput = Number(height.value);
const age = document.querySelector("#age");
let ageInput = Number(age.value);
const weight = document.querySelector("#weight");
let weightInput = Number(weight.value);

const female = document.querySelector("#female");
const male = document.querySelector("#male");

const activityList = document.querySelector("#activityList");
let activityListInput = Number(activityList.value);

const btn = document.querySelector(`input[type="submit"]`);

//Output Variables

const grundKcal = document.querySelector("#grundKcal");
const grundKJ = document.querySelector("#grundKJ");

const gesamtKcal = document.querySelector("#gesamtKcal");
const gesamtKJ = document.querySelector("#gesamtKJ");

//function

function calc(event) {
    event.preventDefault();

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