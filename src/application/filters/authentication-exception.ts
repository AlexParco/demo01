import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Catch(Error)
export class AuthenticationException implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        response
            .status(HttpStatus.UNAUTHORIZED)
            .json({
                statusCode: HttpStatus.UNAUTHORIZED,
                timestamp: new Date().toISOString(),
                message: exception.message
            });
    }
}