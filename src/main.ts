import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TestPipePipe } from './test-pipe/test-pipe.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new TestPipePipe());
  await app.listen(3000);
}
bootstrap();
