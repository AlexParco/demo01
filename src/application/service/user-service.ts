import { Inject, Injectable } from "@nestjs/common";
import { login_use_case } from "../../domain/use-cases/login-use-case";
import { UserDto } from "../dto/user-dto";
import { Token } from "../../domain/models/token";
import { User } from "../../domain/models/user";


@Injectable()
export class UserService {

    constructor(@Inject('loginUseCase') private readonly useCase: login_use_case) { }

    loginUser(user: UserDto): Token {
        return this.useCase.get(new User(user.email, user.password))
    }

}