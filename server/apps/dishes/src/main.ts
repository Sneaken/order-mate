import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { PrismaService } from '../../server/src/prisma.service';
import { DishesModule } from './dishes.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    DishesModule,
    new FastifyAdapter(),
  );
  app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.TCP,
      options: {
        port: 4002,
        host: '0.0.0.0',
      },
    },
    {
      inheritAppConfig: true, // 继承 app 配置
    },
  );

  // 设置全局接口前缀
  app.setGlobalPrefix('api', { exclude: ['*'] });
  // 接口版本化管理
  app.enableVersioning({
    type: VersioningType.URI,
  });
  // 启动全局字段校验，保证请求接口字段校验正确。
  app.useGlobalPipes(new ValidationPipe());

  // 启动所有微服务
  await app.startAllMicroservices();

  await app.listen(3002);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
}
bootstrap();
