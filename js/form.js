let closeForm = document.querySelector('#close');
closeForm.addEventListener('click', function (event) {

    form.style.display = "none";
    document.body.style.overflow = "auto";
});


document.getElementById('order').addEventListener('click', function () {
    let form = document.getElementById('form');
    form.style.display = "block";
    document.body.style.overflow = "hidden";
});

let number_check = false;
let street_check = false;
let house_check = false;
let apart_check = false;

let submit = document.querySelector(".submit");
let number = document.querySelector(".number");
let street = document.querySelector(".street");
let house = document.querySelector(".house");
let apart = document.querySelector(".apartment");


let regex1_1 = /^\+(?:[0-9] ?){11}[0-9]$/;
let regex1_2 = /^(?:[0-9] ?){10}[0-9]$/;
let regex2 = /^[a-zA-Z\s]+$/;
let regex3 = /^\d+$/;

function check() {
    submit.disabled = true;
    if (number.value == "") {
        submit.disabled = true;
        number_check = false;
        number.style.borderColor = "red";
    }
    else if (number.value.match(regex1_1) || number.value.match(regex1_2)) {
        number_check = true;
        number.style.borderColor = "green";
    }
    else {
        submit.disabled = true;
        number_check = false;
        number.style.borderColor = "red";
    }

    if (street.value == "") {
        submit.disabled = true;
        street_check = false;
        street.style.borderColor = "red";

    }
    else if (street.value.match(regex2)) {
        street_check = true;
        street.style.borderColor = "green";
    }
    else {
        submit.disabled = true;
        street_check = false;
        street.style.borderColor = "red";

    }

    if (house.value == "") {
        submit.disabled = true;
        house_check = false;
        house.style.borderColor = "red";

    }
    else {
        house_check = true;
        house.style.borderColor = "green";

    }

    if (apart.value == "") {
        submit.disabled = true;
        apart_check = false;
        apart.style.borderColor = "red";

    }
    else {
        apart_check = true;
        apart.style.borderColor = "green";

    }

    if (number_check &&
        apart_check &&
        house_check &&
        street_check) {


        submit.disabled = false;
    }
    console.log(number_check,
        apart_check,
        house_check,
        street_check);
}

number.addEventListener("change", check);
house.addEventListener("change", check);
apart.addEventListener("change", check);
street.addEventListener("change", check);

submit.addEventListener('click', function (event) {

    setTimeout(function () {
        form.style.display = "none";
        document.body.style.overflow = "auto";
        localStorage.clear();
        location.reload();

    }, 200);

    // alert("Спасибо, что выбрали BurGo! Наш оператор свяжется с вами в течении минуты.");
});

console.log(document.querySelector(".number").value == '')