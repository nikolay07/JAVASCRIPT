//const baseUrl = 'https://5e988dc45eabe7001681c309.mockapi.io/api/v1/users';
//const baseUrl = 'https://5e98af0c5eabe7001681c458.mockapi.io/v1/users'
const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users'

const headersJson = { 'Content-Type': 'application/json;charset=utf-8' };

/* getUsersList code here */
const getUsersList = () => {
    return fetch(baseUrl)
        .then(response => response.json());
};
getUsersList().then(result => console.log(result))
console.log(fetch(baseUrl));



/* getUserById code here */
const getUserById = userById => {
    return fetch(`${baseUrl}/${userById}`)
        .then(response => response.json())
};
//getUserById('3').then(userById => console.log(userById));

/* createUser code here */
const user = {
    email: "nik@hotmail.com",
    firstName: "Nik",
    lastName: "Abr",
    age: 34,
};
const createUser = newUser => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: headersJson,
        body: JSON.stringify(newUser),
    })
};
//createUser(user);

/* updateUser code here */
const updateUserInfo = {
    firstName: "Rostislav",
    lastName: "Shiyan",
    age: 29,
}
const updateUser = (userId, updateUserInfo) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: headersJson,
        body: JSON.stringify(updateUserInfo),
    })
};
//updateUser('2', updateUserInfo);

/* deleteUser code here */
const deleteUser = userId => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
    })
};
//deleteUser("8");
//export { getUsersList, getUserById, createUser, updateUser, deleteUser };