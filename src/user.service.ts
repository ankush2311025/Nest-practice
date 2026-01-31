import { Injectable } from "@nestjs/common";

export interface User {
    name : string;
    age : number ;
    id : number;
}

@Injectable()
export class UserService {
    private store = new Map<number, User>(); // store is a private property of UserService class which is a map of number and User interface

    addUser(user: User){
        return this.store.set(user.id, user);
    }

    getUser(id: number){
        return this.store.get(id);
    }

    getUsers(){
        return Array.from(this.store).map(([_,user]) => user);
    }

    updateUser(id: number, user: User){
        return this.store.set(id, user);
    }

    deleteUser(id:number){
        return this.store.delete(id);
    }
}