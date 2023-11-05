(function() {
    function onPageLoad() {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;

        const infoElement = document.createElement('div');
        infoElement.innerText = `Время загрузки: ${loadTime} мс`;
        infoElement.style.fontSize = '14px';
        infoElement.style.color = '#333';
        infoElement.style.marginTop = '10px';

        const footer = document.querySelector('footer');
        footer.appendChild(infoElement);
    }

    window.addEventListener('load', onPageLoad);
})();