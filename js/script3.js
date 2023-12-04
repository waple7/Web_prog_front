let errorOccurred = false;

async function fetchDataFilter(userId, filterCounter) {
    if (errorOccurred) {
        return;
    }

    let url = `https://jsonplaceholder.typicode.com/users/${userId}`;

    if (filterCounter % 2 === 0) {
        // url += '/postshhh';url += '/photos';
        url += '/photos';
    } else {
        // url += '/poststtt';
        url += '/comments';
    }

    console.log('URL:', url);

    try {
        const response = await fetch(url);

        if (response.status !== 200) {
            return { error: true, message: this.error.message };
        }

        return response.json();
    } catch (error) {
        errorOccurred = true;

        const errorContainer = document.getElementById('error_container');
        errorContainer.style.display = 'block';

        return { error: true, message: this.error.message };
    }

}

function update(userDetails) {
    const userDetailsList = document.getElementById('user_describe_list');
    const userDetailsContainer = document.getElementById('user_describe_container');
    const loadingContainer = document.getElementById('loading_container');
    const userCardTemplate = document.getElementById('photo_template');

    const album1Photos = userDetails.filter(photo => photo.albumId === 1);

    album1Photos.sort(() => Math.random());

    const randomAlbum1Photos = album1Photos.slice(0, 5);

    for (const photo of randomAlbum1Photos) {
        // Клонируем содержимое шаблона
        const listItem = userCardTemplate.content.cloneNode(true);

        // Заполняем данные
        listItem.querySelector('img').src = photo.thumbnailUrl;
        listItem.querySelector('p').textContent = `albumId: ${1}, title: ${photo.title}`;

        userDetailsList.appendChild(listItem);
    }

    loadingContainer.style.display = 'none';
    userDetailsContainer.style.display = 'block';
}





async function fetchData(userId, numRequests) {
    for (let i = 0; i < numRequests; i++) {
        try {
            const userData = await fetchDataFilter(userId, i);

            update(userData);
        } catch (error) {
            console.error('Error :', error);
        }
    }
}

const userId = 1;

setTimeout(function () {
    fetchData(userId, 2);
}, 3000);
