export const event = {
    message: 'Welcome to the party!',
    guests: [{ name: 'John', age: 21, email: 'john@server.com', }, { name: 'Ann', age: 16, email: 'ann@server.com', }, { name: 'Merry', age: 19, email: 'merry@server.com', }],
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                text: `Dear ${name}! ${this.message}`,
                email
            }));
    }
};
console.log(event.getInvitations());