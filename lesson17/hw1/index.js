export const user = {
    firstName: 'name',
    lastName: 'lastName',
    getFullName() {
        let fullName = `${firstName} ${lastName}`;
        return fullName;
    },
    setFullName(fullName) {
        let separateFullName = fullName.split(' ');
        return separateFullName;
    },
}