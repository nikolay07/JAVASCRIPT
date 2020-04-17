function fetchUserData(userName) {
    return fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json());
};

function fetchRepositories(url) {
    return fetch(url)
        .then(response => response.json());
}

export { fetchUserData, fetchRepositories };