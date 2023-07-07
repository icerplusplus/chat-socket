import { Module, DynamicModule, Logger, Global } from '@nestjs/common';
import { IORedisKey } from './redis.client';
import { ConfigModule } from '@nestjs/config';
import IORedis, { RedisOptions } from 'ioredis';
import { RedisService } from './redis.service';

@Global()
@Module({})
export class RedisModule {
  static forRoot(options: RedisOptions): DynamicModule {
    return {
      module: RedisModule,
      imports: [ConfigModule], // Chắc chắn rằng ConfigModule đã được import trong AppModule
      providers: [
        {
          provide: IORedisKey,
          useFactory: async () => {
            const logger = new Logger('RedisModule');
            const client = await new IORedis(options);

            logger.log('Redis client ready');

            client.on('error', (err) => {
              logger.error('Redis Client Error: ', err);
            });

            client.on('connect', () => {
              logger.log(
                `Connected to redis on ${client.options.host}:${client.options.port}`,
              );
            });

            return client;
          },
        },
        RedisService,
      ],
      exports: [IORedisKey, RedisService],
    };
  }
}

export { IORedisKey };
