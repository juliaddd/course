// массив с основной информацией о продукте. Загружается из хранилища
// src, name,cost,amount,
let cart = [];
if (localStorage.getItem("cart") != null) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

// событие для всех элементов меню
document.querySelectorAll('.cart').forEach(function (element) {
    element.addEventListener('click', function (event) {
        // получаем через event конкретную кнопку и через родственных узлов будем вылавливать информацию карточки
        let elem = event.target, parent;
        let overlay = document.getElementById('overlay');
        // переходим к родительскому узлу карточки
        if (elem.parentNode.className == "item") {
            parent = elem.parentNode;
        }
        else {
            parent = elem.parentNode.parentNode;
        }
        // изменяем значения в html 
        // name of product
        document.getElementById("name").innerHTML = parent.children[1].innerHTML;
        // image
        overlay.children[0].children[1].src = parent.children[0].src;
        // description of item
        overlay.children[0].children[2].innerHTML = parent.children[2].innerHTML;
        // cost
        document.getElementById("cost_span").children[0].children[0].innerHTML = parseFloat(parent.children[3].children[0].innerHTML);
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
    });
});
// закрытие всплывающего окна
let closeOverlay = document.querySelector('#close');
closeOverlay.addEventListener('click', function (event) {
    let overlay = document.getElementById('overlay');
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    document.querySelector('#amount').value = 1;
});

// добавление 1 элемента при нажатии на +
let plusItem = document.querySelector('#plus');
plusItem.addEventListener('click', function (event) {
    let input = document.querySelector('#amount');
    let cost = parseFloat(document.getElementById("cost_span").children[0].children[0].innerHTML);
    let oneItemCost = cost / input.value;
    input.value++;
    cost += oneItemCost;
    document.getElementById("cost_span").children[0].children[0].innerHTML = cost;
});

// уменьшение количества выбранных элементов при нажатии на -
let minusItem = document.querySelector('#minus');
minusItem.addEventListener('click', function (event) {
    let input = document.querySelector('#amount');

    if (input.value > 1) {
        let cost = parseFloat(document.getElementById("cost_span").children[0].children[0].innerHTML);
        let oneItemCost = cost / input.value;
        input.value--;
        cost -= oneItemCost;
        document.getElementById("cost_span").children[0].children[0].innerHTML = cost;
    }
});

// обработчик собтия нажатия на кнопку "заказать"
let makeOrder = document.querySelector('.into-cart');
makeOrder.addEventListener('click', function (event) {
    let overlay = document.getElementById('overlay');
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    // объект хранит всю информацию о текущем продукте
    let item = {};
    item.src = document.getElementById("img").src;
    item.name = document.getElementById("name").innerHTML;
    item.amount = document.getElementById("amount").value;
    item.cost = parseFloat(document.getElementById("cost_span").children[0].children[0].innerHTML);
    // добавление текущего продукта в общий массив - корзину
    cart.push(item);
    // выгрузка массива в хранилище
    localStorage.setItem("cart", JSON.stringify(cart));
    document.querySelector('#amount').value = 1;
});
