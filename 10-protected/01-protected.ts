class UserTwo {
    // private _getCourseCount : number = 1
    protected _getCourseCount : number = 1
}

class subUser extends UserTwo {
    isFamily : boolean
    getCourseCount (){
        this._getCourseCount = 6
    }
}

const user1 : subUser = new UserTwo {_getCourseCount:6}
console.log(user1);
