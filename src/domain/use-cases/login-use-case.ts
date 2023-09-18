import { Injectable } from "@nestjs/common";
import { User } from "../models/user";
import { Itoken_repository } from "../repository/token-repostiory";
import { Iuser_repository } from "../repository/user-repository";

export class login_use_case {

    constructor(private readonly _token_repo :Itoken_repository, private readonly  _user_repo: Iuser_repository) {}

    get (user: User) {
        let tempUser = this._user_repo.findByEmail(user.email.get()) 

        // simple validation user 
        if(tempUser === null)  {
            throw Error("email or password is incorrect"); 
        }
        if(tempUser.password !== user.password) {
            throw Error("email or password is incorrect"); 
        }
        
        return this._token_repo.create(user)
    }
}