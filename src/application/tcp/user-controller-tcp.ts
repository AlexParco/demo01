import { Controller, Get, Inject } from "@nestjs/common";
import { UserService } from "../service/user-service";
import { ClientProxy, MessagePattern, Payload, Transport } from "@nestjs/microservices";
import { map } from "rxjs";

@Controller()
export class UserControllerTcp {

    constructor(
        private readonly userService: UserService,
    ) { }

    // @Post('/login')
    // @UseFilters(AuthenticationException)
    // async loginMethod(@Body() user: UserDto) {
    //     return this.userService.loginUser(user)
    // }
    @MessagePattern('login')
    test(): string {
        console.log('hola')
        return "hola"
    }
}