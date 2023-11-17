window.addEventListener("load", function () {
    console.log("Script is running!"); // добавьте эту строку
    const durationElement = document.getElementsByClassName('timer').item(0);

    if (durationElement) {
        const loadTime = performance.now();
        durationElement.textContent = loadTime.toFixed(1) + " мс";
    }
});


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