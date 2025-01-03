import { NestFactory } from '@nestjs/core';

import { bootstrap } from 'libs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/validation.pipe';

async function start() {
  const port = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  await bootstrap(app);

  app.useGlobalPipes(new ValidationPipe());

  app.listen(port, () => console.log(`Server started on port = ${port}`));
}

start();
