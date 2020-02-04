const pickProps = (obj, arr) => {
        const newObject = {};
        for (let i in obj) {
            if (arr.includes(i)) { newObject[i] = obj[i]; }
        }
        return newObject;
    }
    /*
    Доставание свойств из объекта 
    
    Примитивный способ:
    for (let i in obj) {
            for (let a of arr) {
                if (i === a) object[i] = obj[i];
            }
        }
    */