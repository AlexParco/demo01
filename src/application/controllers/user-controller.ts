import { Body, Controller, Get, Post } from "@nestjs/common";
import { User } from '../../domain/models/user'
import {login_use_case} from '../../domain/use-cases/login-use-case'
import { UserRepository } from "src/infrastructure/impl-repository/user-repository";

@Controller('user')
export class UserController {
    constructor(private readonly usecase: login_use_case) {
    }

    @Post('/login')
    async loginMethod (@Body() user: User){
        // return new login_use_case().get(user);
        let temp = this.usecase.get(user)
        console.log(temp)
    }

    @Get('/test')
    async test () { 
        // return new login_use_case().get(user);
        return "test"
    }
}