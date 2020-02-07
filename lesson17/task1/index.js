const user = {
    firstName: 'name',
    lastName: 'lastName',
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
};
user.getFullName();