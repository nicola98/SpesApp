import { UserList } from "../entities/user-list";

export class User{
    email: string;
    password: string;
    userList: UserList;

    constructor(email: string = "", password: string=""){
        this.email = email;
        this.password = password;
    }
}