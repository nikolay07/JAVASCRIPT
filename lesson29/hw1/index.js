export const requestUserData = (userId, callback) => {
    setTimeout(() => {
        if (userId === 'broken') {
            callback(null, 'Failed to load user data')
        }
        callback({ userId: 'nik', email: `${nik}@gmail.com` });
    }, 3000);
};