import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TestMiddlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (val?: any) => void) {
    console.log('middleware before');
    // next(new Error('ddd'));
    next();
    console.log('middleware after');
  }
}
