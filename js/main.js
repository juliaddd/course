function rotateLettuce1() {
    let lettuce = document.querySelector(".lettuce1");
    lettuce.style.transform = "rotate(-3deg)";
    setTimeout(function () {
        lettuce.style.transform = "rotate3(3deg)";
        setTimeout(function () {
            lettuce.style.transform = "rotate(0deg)";
        }, 200);
    }, 100);
}

let element = document.querySelector(".lettuce1");
element.addEventListener("mouseover", rotateLettuce1);


function rotateLettuce2() {
    let lettuce = document.querySelector(".lettuce2");
    lettuce.style.transform = "rotate(3deg)";
    setTimeout(function () {
        lettuce.style.transform = "rotate3(-3deg)";
        setTimeout(function () {
            lettuce.style.transform = "rotate(0deg)";
        }, 200);
    }, 100);
}

element = document.querySelector(".lettuce2");
element.addEventListener("mouseover", rotateLettuce2);



function scaleBurger() {
    let burger = document.querySelector(".banner-bg").children[1];
    burger.style.transform = "scale(1.01,1.01)";
    setTimeout(function () {
        burger.style.transform = "scale(0.99,0.99)";
        setTimeout(function () {
            burger.style.transform = "scale(1)";
        }, 300);
    }, 300);
}

let burger = document.querySelector(".banner-bg").children[1];
burger.addEventListener("mouseover", scaleBurger);

function rotateTomato1() {
    let tomato1 = document.querySelector(".tomato1");
    if (tomato1.style.transform == "rotate(360deg)") {
        setTimeout(function () {
            tomato1.style.transform = "rotate(180deg)";
            setTimeout(function () {
                tomato1.style.transform = "rotate(0deg)";
            }, 200);
        }, 200);
    }
    else {
        tomato1.style.transform = "rotate(0deg)";
        setTimeout(function () {
            tomato1.style.transform = "rotate(180deg)";
            setTimeout(function () {
                tomato1.style.transform = "rotate(360deg)";
            }, 100);
        }, 200);
    }

}

element = document.querySelector(".tomato1");
element.addEventListener("mouseover", rotateTomato1);

function rotateTomato2() {
    let tomato2 = document.querySelector(".tomato2");
    if (tomato2.style.transform == "rotate(360deg)") {
        setTimeout(function () {
            tomato2.style.transform = "rotate(180deg)";
            setTimeout(function () {
                tomato2.style.transform = "rotate(0deg)";
            }, 200);
        }, 200);
    }
    else {
        tomato2.style.transform = "rotate(0deg)";
        setTimeout(function () {
            tomato2.style.transform = "rotate(180deg)";
            setTimeout(function () {
                tomato2.style.transform = "rotate(360deg)";
            }, 100);
        }, 200);
    }

}

element = document.querySelector(".tomato2");
element.addEventListener("mouseover", rotateTomato2);

