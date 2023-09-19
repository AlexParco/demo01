import { Module } from '@nestjs/common';
import { UserController } from './application/controller/user-controller';
import { UserRepository } from './infrastructure/impl-repository/user-repository';
import { login_use_case } from './domain/use-cases/login-use-case';
import { TokenRepository } from './infrastructure/impl-repository/token-repository';
import { UserService } from './application/service/user-service';
import { UserControllerTcp } from './application/tcp/user-controller-tcp';


@Module({
    imports: [],
    controllers: [UserController, UserControllerTcp],
    providers: [
        UserService,
        UserRepository,
        TokenRepository,
        {
            provide: 'loginUseCase',
            useFactory: (userRepo: UserRepository, tokenRepo: TokenRepository) => {
                return new login_use_case(userRepo, tokenRepo)
            },
            inject: [UserRepository, TokenRepository]
        },
    ],
})

export class AppModule { }

