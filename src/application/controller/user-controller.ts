import { Body, Controller, Get, Post, UseFilters } from "@nestjs/common";
import { UserService } from "../service/user-service";
import { UserDto } from "../dto/user-dto";
import { AuthenticationException } from "../filters/authentication-exception";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post('/login')
    @UseFilters(AuthenticationException)
    async loginMethod(@Body() user: UserDto) {
        return this.userService.loginUser(user)
    }

    @Get('/test')
    async test() {
        return "test"
    }
}