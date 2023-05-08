
// AJAX request that retrieves data from a server
// and updates a web page without reloading it

// The XMLHttpRequest object is used to exchange data with a server behind the scenes.
let xhttp = new XMLHttpRequest();

// The onreadystatechange property sets a function to be executed when the readyState property changes.
// The readyState property holds the status of the XMLHttpRequest
xhttp.onreadystatechange = function () {

    // When readyState changes, the if (this.readyState == 4 && this.status == 200) 
    // statement checks if the operation is complete and 
    // if the response was successful (status code 200). 
    if (this.readyState == 4 && this.status == 200) {
        // updates the HTML content of an element with id “myheader” with the response text from the server.
        document.getElementById("myheader").innerHTML = this.responseText;
    }
};
xhttp.open("GET", "../header.html", true);
xhttp.send();

xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    // состояние равно 4 (завершено) и статус равен 200 (успешный ответ сервера)
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("myfooter").innerHTML = this.responseText;
    }
};

// Третья строка открывает соединение с файлом footer.html
// методом GET.

// Четвертая строка отправляет запрос на сервер.
xhttp.open("GET", "../footer.xml", true);
xhttp.send();