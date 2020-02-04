const getAdults = (obj) => {
    let newObj = {};
    for (let i in obj) {
        if (obj[i] >= 18) newObj[i] = obj[i];
    }
    return newObj;
};

/*Фильтрация объекта
 

*/