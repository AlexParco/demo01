import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { IUser, User } from '../../domain/models/user'
import {login_use_case} from '../../domain/use-cases/login-use-case'
import { UserRepository } from "../..//infrastructure/impl-repository/user-repository";

@Controller('user')
export class UserController {

    constructor(@Inject('loginUseCase') private readonly useCase: login_use_case) {}

    @Post('/login')
    async loginMethod (@Body() user: IUser){
        // return new login_use_case().get(user);
        let temp = this.useCase.get(new User(user.email, user.password))

        return temp
    }

    @Get('/test')
    async test () { 
        // return new login_use_case().get(user);
        return "test"
    }
}