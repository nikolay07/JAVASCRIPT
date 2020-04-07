export const requestUserData = (userId, callback) => {
    setTimeout(() => {
        if (userId === 'broken') {
            callback(null, 'Failed to load user data')
        }
        callback({ userId: userId, email: `${userId}@example.com` });
    }, 2000);
}