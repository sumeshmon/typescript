abstract class Camera {
    public cameraMode : string
    public filter : string
    constructor (
        cameraMode:string,
        filter:string
    ) {
        this.cameraMode = cameraMode
        this.filter = filter
    }
}

// if we didn't use abstract keyword for Camera class this will not throw error
// const userone = new Camera ('Normal', 'yes')
// console.log(userone);

class Instagram extends Camera {
    reels : boolean
    constructor (
        cameraMode : string,
        filter : string,
        reels : boolean
    ){
        super (cameraMode,filter)
        this.reels = reels
    }
}

const instaUserOne = new Instagram ('Normal','yes', true)
console.log(instaUserOne);
