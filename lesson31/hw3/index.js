const delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

//delay(5000).then(() => console.log('Done!'))