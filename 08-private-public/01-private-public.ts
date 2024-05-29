// class User {
//     name: string
//     email : string
//     readonly city : string = 'Thrissur'
//     constructor (name:string, email: string){
//         this.name
//         this.email        
//     }
// }
// shortcut code of above
class User {
    readonly city: string = 'Thrissur';
    constructor (public name: string, public email: string){        
    }
    getUserInfo() {
        return `Name: ${this.name}, Email: ${this.email}, City: ${this.city}`;
    }
}
// Creating an instance of the User class correctly
const user3 = new User('sumesh', 'sss@speechSynthesis.com');
// The readonly property 'city' will always be 'Thrissur'
console.log(`This is from user3: ${user3.getUserInfo()}`);







// Since city is an instance property (even though it's readonly), it needs to be accessed through an instance of the User class. So, user.city is the correct way to access it after creating an instance.

// const user = new User ('','')
// console.log(user);


// const user1 : User = {name:'sumesh', email: 'sumesh@ss.com', city:'Irijalakuda'}
// console.log(user1);




export{}