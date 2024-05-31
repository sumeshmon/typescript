class User{
    private _courseCount = 1
    private email:string
    private name : string

    readonly city : string = 'Thrissur'
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    get appleEmail () : string {
        return `Apple email ${this.email}`
    }
    get courseCount () : number {
        return this._courseCount
    }

    set courseCount(val: number) {
        if (val <= 1) {
            throw new Error('The number must be greater than 1');
        }
        this._courseCount = val;
    }
}

const user1: User = new User('Sumesh', 'sumesh@domain.com');
// console.log(user1);
// console.log(`with apple email ${user1.appleEmail}`); // Accessing appleEmail using the getter
// try {
//     user1.courseCount = 5; // Valid value, will set _courseCount to 5
//     console.log(user1.courseCount); // 5

//     user1.courseCount = 1; // Invalid value, will throw an error
// } catch (error) {
//     console.error(error.message); // "The number must be greater than 1"
// }
