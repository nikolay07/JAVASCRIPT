console.log('Request data...');
// setTimeout(() => {
//     const backEndData = {
//         server: 'microsoft',
//         port: 4087,
//         status: 'working',
//     }
//     setTimeout(() => {
//         backEndData.modifiend = true;
//         console.log('Data receved', backEndData);
//     }, 2000);
// }, 2000);
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...');
//         const backEndData = {
//             server: 'microsoft',
//             port: 4087,
//             status: 'working',
//         }
//         resolve(backEndData);
//     }, 5000);
// });
// p.then((data) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 data.modifiend = true;
//                 //resolve(data);
//                 resolve(data)
//             }, 2000);
//         })
//     })
//     .then(clientData => {
//         clientData.fromPromise = true;
//         return clientData;
//     }).then(data => {
//         console.log('Modifind', data);
//     })
//     .catch(error => console.log('Error', error))
//     .finally(() => { console.log('Finally'); })


const sleep = ms => {
        return new Promise(resolve => {
            setTimeout(() => resolve(), ms)
        })
    }
    // sleep(2000).then(() => console.log('2 seconds'));
    // sleep(4000).then(() => console.log('4 seconds'));

// Promise.all([sleep(2000), sleep(5000)])
//     .then(() => {
//         console.log('All promises');
//     })

Promise.race([sleep(2000), sleep(5000)])
    .then(() => {
        console.log('Race promises'); //какой выполнится первый из всех
    })