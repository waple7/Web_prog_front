document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.pathname;

    var navLinks = document.querySelectorAll('a');
    navLinks.forEach(function(link) {
        if(link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
});
