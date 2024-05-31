class UserOne {
    name: string
    constructor (name: string){
        this.name = name
    }

    private deleteTocken () {
        console.log('Tocken deleted');
        
    }

    triggerDeleteTocken (){
        this.deleteTocken()
    }
    
}
const user3: UserOne = new UserOne ('Sumesh')
console.log(user3);
user3.triggerDeleteTocken()
