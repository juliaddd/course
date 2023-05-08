$(document).ready(function () {
    // обращаемсяк хедер бургер
    $('.header_burger').click(function (event) {
        // toggleClass - нажали добавился, нажали убрался класс
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});