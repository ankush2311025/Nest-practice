import { Injectable } from "@nestjs/common";

interface User {
    id : number;
    name : string;
    age : number ;
}
@Injectable()
export class UsersStore {
    private store = new Map<number, User>();
    constructor(){
        console.log("User store init")
    }
    
    addUser(user: User){
        this.store.set(user.id, user);
    }
    getUser(id: number){
        return this.store.get(id);
    }
    getAllUsers(){
        return Array.from(this.store).map((__, user) => user);
    }
    updateUser(id: number, user: User){
        this.store.set(id, user);
    }
    deleteUser(id:number){
        this.store.delete(id);
    }
}