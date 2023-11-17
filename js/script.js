(function() {
    function onPageLoad() {
        const startTime = window.performance.now();

        window.addEventListener('load', function() {
            const loadTime = window.performance.now() - startTime;

            const infoElement = document.createElement('div');
            infoElement.innerText = `Time: ${loadTime} мс`;
            infoElement.classList.add('timer');

            const footer = document.querySelector('footer');
            footer.appendChild(infoElement);
        });
    }

    onPageLoad();
})();
// IIFE (Immediately Invoked Function Expression)-немедленно вызываемое функциональное выражение
// обработчик события для window сработает когда все ресурсы будут загружены

// document.addEventListener('DOMContentLoaded', function() {
//     var currentPage = window.location.pathname;
//
//     var navLinks = document.querySelectorAll('a');
//     navLinks.forEach(function(link) {
//         if(link.getAttribute('href') === currentPage) {
//             link.parentElement.classList.add('active');
//         }
//     });
// });
window.onload = function (){
    if(document.location.href.includes("index")){
        document.getElementsByClassName('button_main').item(0).classList.add("active");
    }
    if(document.location.href.includes("catalog")){
        document.getElementsByClassName('button_catalog').item(0).classList.add("active");
    }
    if(document.location.href.includes("team")){
        document.getElementsByClassName('button_team').item(0).classList.add("active");
    }
    if(document.location.href.includes("vacancies")){
        document.getElementsByClassName('button_vacancies').item(0).classList.add("active");
    }
    if(document.location.href.includes("comments")){
        document.getElementsByClassName('button_comments').item(0).classList.add("active");
    }
}