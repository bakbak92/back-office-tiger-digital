export default class Prospect {
    constructor(){
        this.id = null;
        this.name = null;
        this.firstname = null;
        this.email = null;
    }

    static fromAPI(id, data){
        return Object.assign(new Prospect(), {
            id: id,
            name: data.name,
            firstname: data.firstname,
            email: data.email
        })
    }
}