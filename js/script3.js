let errorOccurred = false;

async function fetchDataFilter(userId, filterCounter) {
    if (errorOccurred) {
        return;
    }

    let url = `https://jsonplaceholder.typicode.com/users/${userId}`;

    if (filterCounter % 2 === 0) {
        // url += '/postshhh';url += '/photos';
        url += '/photoshhh';
    } else {
        // url += '/poststtt';
        url += '/commentshhhhh';
    }

    console.log('URL before fetch:', url);

    try {
        const response = await fetch(url);

        if (response.status !== 200) {
            throw new Error(' response not');
        }

        return response.json();
    } catch (error) {
        errorOccurred = true;

        const errorContainer = document.getElementById('error_container');
        errorContainer.style.display = 'block';

        // Оставляем блок catch без throw
    }





}

function update(userDetails) {
    const userDetailsList = document.getElementById('user_describe_list');
    const userDetailsContainer = document.getElementById('user_describe_container');
    const loadingContainer = document.getElementById('loading_container');

    for (const field in userDetails) {
        const listItem = document.createElement('li');
        listItem.textContent = `${field}: ${JSON.stringify(userDetails[field])}`;
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
            console.error('Error during fetch:', error);
        }
    }
}

const userId = 1;

setTimeout(function () {
    fetchData(userId, 2);
}, 3000);
