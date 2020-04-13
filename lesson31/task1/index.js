const requestUserData = userId => {
    return new Promise((rulfilled, reject) => {
        if (userId === 'broken') {
            setTimeout(() => {
                reject(new Error('User not found'));
            }, 500);
        } else {
            setTimeout(() => {
                rulfilled({
                    name: 'Jonh',
                    age: 17,
                    userId: `${userId}`,
                    email: `${userId}@example.com`,
                });
            }, 1000);
        }
    });
};
requestUserData('user1')
    .then(data => console.log(data))
    .catch(error => console.log(error))
    // .finally(() => console.log('finally'))
export { requestUserData }