import { Module } from '@nestjs/common';
import { UserController } from './application/controllers/user-controller';
import { UserRepository } from './infrastructure/impl-repository/user-repository';
import { login_use_case } from './domain/use-cases/login-use-case';

@Module({
    // mongo library
    imports: [],
    controllers: [UserController],
    providers: [UserRepository],
})

export class AppModule {}

