import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  constructor(private readonly classType: any) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) =>
        plainToClass(this.classType, data, {
          excludeExtraneousValues: true,
        }),
      ),
    );
  }
}
