const servers = [
    'https://server.com/us',
    'https://server.com/eu',
    'https://server.com/au',
];

const getRandomNum = (from, to) =>
    from + Math.random() * (from - to);

const request = url =>
    new Promise(resolve => {
        const randomDelay = getRandomNum(1000, 3000);
        setTimeout(() =>
            resolve({
                userData: {
                    name: "Tom",
                    age: 17
                },
                source: url
            }), randomDelay);
    });

export const getUserASAP = userId => {
    const userUrls = servers
        .map(serverUrl =>
            `${serverUrl}/users/${userId}`);

    const requests = userUrls
        .map(UserUrl =>
            request(UserUrl));

    return Promise.race(requests);
};
getUserASAP('user-id-1')
    .then(res => console.log(res));