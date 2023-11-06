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