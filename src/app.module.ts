import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { TestFilterFilter } from './test-filter/test-filter.filter';
import { TestGuardGuard } from './test-guard/test-guard.guard';
import { TestMiddlewareMiddleware } from './test-middleware/test-middleware.middleware';
import { TestInterceptorInterceptor } from './test-interceptor/test-interceptor.interceptor';

@Module({
  imports: [ProjectModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: TestFilterFilter,
    },

    {
      provide: APP_GUARD,
      useClass: TestGuardGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TestInterceptorInterceptor,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TestMiddlewareMiddleware).forRoutes('*');
  }
}
