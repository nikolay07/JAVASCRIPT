let arr = [{ name: 'Mat', phoneNumber: '777-77-77' }, { name: 'Ann', phoneNumber: '777-77-77' }, { name: 'Bob', phoneNumber: '777-77-77' }]

function sortContacts(arr, bool = true) {
    if (!Array.isArray(arr)) return null;
    return bool ? arr.sort((a, b) => a.name.localeCompare(b.name)) : arr.sort((a, b) => b.name.localeCompare(a.name));
}
console.log(sortContacts(arr, false));