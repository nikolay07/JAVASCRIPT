export const user = {
    firstName: 'name',
    lastName: 'lastName',
    getFullName() {
        let fullName = `${this.firstName} ${this.lastName}`;
        return fullName;
    },
    setFullName(fullName) {
        let separateFullName = fullName.split(' ');
        this.firstName = separateFullName[0];
        this.lastName = separateFullName[1];
    },
}