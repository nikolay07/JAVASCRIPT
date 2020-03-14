// let obj1 = { name: 'Nik', age: 34, married: true, city: 'Kyiv' };
// let obj2 = { name: 'Rostik', age: 29, city: 'Lviv' };
const mergeObjectsV1 = (obj1, obj2) => {
        return Object.assign(obj1, obj2);
    }
    // console.log(mergeObjectsV1(obj1, obj2));

const mergeObjectsV2 = (obj1, obj2) => {
        return Object.assign(obj2, obj1);
    }
    // console.log(mergeObjectsV2(obj1, obj2));

const mergeObjectsV3 = (obj1, obj2) => {
        return Object.assign({...obj1 }, {...obj2 });
    }
    // console.log(mergeObjectsV3(obj1, obj2));
    // console.log(obj1);

const mergeObjectsV4 = (obj1, obj2) => {
        return Object.assign({...obj2 }, {...obj1 });
    }
    // console.log(mergeObjectsV4(obj1, obj2));
    // console.log(obj2);