export default class Prospect {
    constructor(){
        this.id = null;
        this.name = null;
        this.telephone = null;
        this.email = null;
        this.message = null;
    }

    static fromAPI(id, data){
        return Object.assign(new Prospect(), {
            id: id,
            name: data.name,
            telephone: data.telephone,
            email: data.email,
            message: data.message
        })
    }
}