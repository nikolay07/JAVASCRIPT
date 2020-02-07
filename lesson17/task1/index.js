export const user = {
    firstName: 'name',
    lastName: 'lastName',
    getFullName() {
        return (`${this.firstName} ${this.lastName}`)
    }
};
user.getFullName();