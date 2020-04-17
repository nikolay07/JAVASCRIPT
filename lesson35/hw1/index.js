const userName = '{"name" : "Nik"}';
export const parseUser = jsonUser => {
    try {
        const user = JSON.parse(jsonUser);
        //console.log(user);
        return user;
    } catch {
        //console.error('Error');
        return null;
    }
};
//parseUser(userName);