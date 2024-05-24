var user1 = {
    id: '123',
    name: 'Sumesh',
    email: 'ss.com',
    isActive: false
};
console.log(user1);
user1.name = 'sali';
// user1.id = '999' //Cannot assign to 'id' because it is a read-only property.
console.log(user1);
