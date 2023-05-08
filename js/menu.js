
document.addEventListener("scroll", function () {
    let sidebar = document.querySelector("#sidebar");
    let footer = document.querySelector("#myfooter");
    let footerHeight = Number(footer.offsetHeight);
    let scrollTop = window.pageYOffset;
    let fullHeight = Math.max(document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight,
        document.documentElement.clientHeight);
    let windowHeight = document.body.clientHeight;
    let x = fullHeight - footerHeight,
        y = scrollTop + windowHeight;


    if (window.innerWidth > 887) {
        if (x < y) {
            sidebar.style.paddingBottom = `${footerHeight + 80}px`;
        }
        else {
            sidebar.style.paddingBottom = `0px`;
        }
    }
    else {
        sidebar.style.paddingBottom = `0px`;
    }


});