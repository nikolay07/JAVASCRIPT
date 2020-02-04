function getAdults(users) {
    const arrayUsers = Object.entries(users);
    const filtredAdultUsers = arrayUsers.filter(user => user[1] >= 18);
    const adultUsers = filtredAdultUsers.map(user => user[0])
    return adultUsers;
}


/*
Методы работы с объектами

Object.entries() - переводит объект в массив масивов.
Упрощенный вариант:
const adultUsers = Object.entries(users).filter(user => user[1] >= 18).map(user => user[0])
     return adultUsers;

*/