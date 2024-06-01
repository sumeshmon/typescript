class UserTwo {
    // Changed private to protected so it can be accessed by subclasses
    protected _courseCount: number = 1;

    constructor(courseCount: number = 1) {
        this._courseCount = courseCount;
    }
}

class SubUser extends UserTwo {
    isFamily: boolean;

    constructor(courseCount: number = 1, isFamily: boolean = false) {
        super(courseCount);
        this.isFamily = isFamily;
    }

    getCourseCount() {
        return this._courseCount;
    }

    setCourseCount(count: number) {
        this._courseCount = count;
    }
}

// Create an instance of SubUser
const user1: SubUser = new SubUser(2, true);
console.log(user1.getCourseCount()); // This should print 2

user1.setCourseCount(6);
console.log(user1.getCourseCount()); // This should print 6


export{}