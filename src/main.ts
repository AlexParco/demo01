import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from "./app.module";
import { Transport } from "@nestjs/microservices";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.connectMicroservice({
        transport: Transport.TCP,
        options: {
            port: 4001
        }
    })

    await app.startAllMicroservices()

    app.useGlobalPipes(new ValidationPipe());

    app.enableCors();

    // swagger
    const config = new DocumentBuilder()
        .setTitle('Demo Swagger')
        .setDescription('The API description')
        .setVersion('1.0')
        .addTag('demo')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(4000);
}
bootstrap();