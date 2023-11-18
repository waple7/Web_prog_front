document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cardForm');
    const cardContainer = document.getElementById('cardContainer');

    loadFromLocalStorage();

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const cardTitle = document.getElementById('cardTitle').value;
        const cardContent = document.getElementById('cardContent').textContent;

        createAndSaveCard(cardTitle, cardContent);

        form.reset();
    });

    function createAndSaveCard(title, content) {
        const card = createCard(title, content);

        cardContainer.appendChild(card);

        saveToLocalStorage();

        attachDeleteHandler(card);
    }

    function attachDeleteHandler(card) {
        const deleteBtn = card.querySelector('button');
        deleteBtn.addEventListener('click', function () {
            cardContainer.removeChild(card);

            saveToLocalStorage();
        });
    }

    function createCard(title, content) {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardTitle = document.createElement('h2');
        cardTitle.textContent = title;

        const cardContent = document.createElement('p');
        cardContent.textContent = content;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Удалить заказ';

        card.appendChild(cardTitle);
        card.appendChild(cardContent);
        card.appendChild(deleteBtn);

        return card;
    }

    function saveToLocalStorage() {
        localStorage.setItem('userInput', cardContainer.innerHTML);
    }

    function loadFromLocalStorage() {
        const savedData = localStorage.getItem('userInput');
        if (savedData) {
            cardContainer.innerHTML = savedData;

            const cards = cardContainer.querySelectorAll('.card');
            cards.forEach(attachDeleteHandler);
        }
    }
});
//localStorage.clear();

