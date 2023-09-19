
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MinLength, IsString } from 'class-validator'

export class UserDto {
    @ApiProperty({ example: 'alex@test.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: '12345678' })
    @IsString()
    @MinLength(8)
    password: string;
}