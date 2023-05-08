
document.addEventListener('DOMContentLoaded', function (event) {
    let data = [];

    if (localStorage.getItem("cart") != null) {
        data = JSON.parse(localStorage.getItem("cart"));
    }


    // рисуем из хранилища блоки
    let div = document.getElementById("menu-items");
    div.innerHTML = "";
    data.forEach(item => {
        div.innerHTML += `
    <div class="item">
        <img src="${item.src}" alt="">
        <h3>${item.name}</h3>
        <div class="cart">
            <button id="minus">-</button>
            <p><span>${item.amount}</span> шт. - <span>${item.cost}</span> р.</p>
            <button id="plus">+</button>
        </div>
    </div>
  `
    });

    // сумма подсчет
    let sum = 0.00;
    data.forEach(element => {
        sum += element.cost;
    });

    document.getElementById("sum").children[0].innerHTML = sum;



    // очищаем хранилизще
    document.getElementById("clear").addEventListener('click', function () {
        localStorage.clear();
        data.length = 0;
        sum = 0;
        document.getElementById("sum").children[0].innerHTML = sum;
        div.innerHTML = "<h2><span>Корзина пуста</span></h2>";
        document.getElementById('order').style.display = "none"
        document.getElementById('sum').style.display = "none"
        document.getElementById('clear').style.display = "none"
    });


    // + - элементы
    document.querySelectorAll('#plus').forEach(function (element) {
        element.addEventListener('click', function (event) {

            let elem = event.target, parent;
            parent = elem.parentNode;
            let amount = parseFloat(parent.children[1].children[0].innerHTML);
            let cost = parseFloat(parent.children[1].children[1].innerHTML);
            let oneItemCost = cost / amount;
            amount++;
            cost += oneItemCost;
            event.target.parentNode.children[1].children[0].innerHTML = amount;
            event.target.parentNode.children[1].children[1].innerHTML = cost;

            data.forEach(element => {
                if (event.target.parentNode.parentNode.children[1].innerHTML == element) {
                    element.cost = cost;
                    element.amount = amount;
                }
            });


            sum += oneItemCost;

            document.getElementById("sum").children[0].innerHTML = sum;
        });
    });

    // уменьшение количества элементов
    document.querySelectorAll('#minus').forEach(function (element) {
        element.addEventListener('click', function (event) {
            let elem = event.target, parent;
            parent = elem.parentNode;
            let amount = parseFloat(parent.children[1].children[0].innerHTML);
            let cost = parseFloat(parent.children[1].children[1].innerHTML);
            let oneItemCost = cost / amount;
            if (amount > 1) {
                amount--;
                cost -= oneItemCost;
                event.target.parentNode.children[1].children[0].innerHTML = amount;
                event.target.parentNode.children[1].children[1].innerHTML = cost;

                data.forEach(element => {
                    if (event.target.parentNode.parentNode.children[1].innerHTML == element) {
                        element.cost = cost;
                        element.amount = amount;
                    }
                });

                sum -= oneItemCost;
                document.getElementById("sum").children[0].innerHTML = sum;

            }
            // если элемент последний, его можно удалить
            else {
                amount = 0;
                data.forEach(element => {

                    if (event.target.parentNode.parentNode.children[1].innerHTML == element.name) {
                        let pos = data.indexOf(element);
                        data.splice(pos, 1);
                    }
                });

                // удаляем карточку элемента
                let parent = document.getElementById("menu-items");
                console.log(event.target.parentNode.parentNode);
                parent.removeChild(event.target.parentNode.parentNode);
                console.log(data);
                sum -= oneItemCost;
                document.getElementById("sum").children[0].innerHTML = sum;



                // проверка на наличие жлементов в корзине. очищаем кнопки  и хранилице
                if (data.length == 0) {
                    localStorage.clear();
                    document.getElementById('order').style.display = "none"
                    div.innerHTML = "<h2><span>Корзина пуста</span></h2>";
                    document.getElementById('order').style.display = "none"
                    document.getElementById('sum').style.display = "none"
                    document.getElementById('clear').style.display = "none"
                }
                else {
                    localStorage.setItem("cart", JSON.stringify(data));
                }
            }

        });
    });


    // если товары есть можно оформить заказ
    console.log(data);
    if (data.length != 0) {
        document.getElementById('order').style.display = "block"
        document.getElementById('sum').style.display = "inline-block"
        document.getElementById('clear').style.display = "inline-block"
    }
    else {
        document.getElementById('order').style.display = "none"
        div.innerHTML = "<h2><span>Корзина пуста</span></h2>";
        document.getElementById('order').style.display = "none"
        document.getElementById('sum').style.display = "none"
        document.getElementById('clear').style.display = "none"
    }

    if (data.length != 0) {
        localStorage.setItem("cart", JSON.stringify(data));
    }

});



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

