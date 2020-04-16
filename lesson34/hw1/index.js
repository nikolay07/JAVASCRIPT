const baseUrl = 'https://5e988dc45eabe7001681c309.mockapi.io/api/v1/users';
const headersJson = { 'Content-Type': 'application/json;charset=utf-8' };

/* getUsersList code here */
const getUsersList = () => {
    return fetch(baseUrl, {
            method: 'GET',
            headers: headersJson,
        })
        .then(response => response.json())
};
// getUsersList(baseUrl).then(result => console.log(result))

/* getUserById code here */
const getUserById = userById => {
    return fetch(`${baseUrl}/${userById}`)
        .then(response => response.json())
};
// getUserById('3').then(result => console.log(result))

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
        headers: headersJson,
    })
};
//deleteUser("9");
export { getUsersList, getUserById, createUser, updateUser, deleteUser };