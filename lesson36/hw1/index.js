async function getUsersBlogs(usersList) {
    const requests = usersList
        .map(userId => fetch(`https://api.github.com/users/${userId}`)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Failed to load data');
            }));
    const usersData = await Promise.all(requests);
    return usersData.map(user => user.blog);
};

export { getUsersBlogs };