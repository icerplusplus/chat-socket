import { Inject, Injectable } from '@nestjs/common';
import { IORedisKey } from './redis.client';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService {
  constructor(@Inject(IORedisKey) private readonly client: Redis) {}

  async set(key: string, value: any): Promise<void> {
    await this.client.set(key, JSON.stringify(value));
  }

  async get(key: string): Promise<any> {
    const data = await this.client.get(key);
    return data ? JSON.parse(data) : null;
  }
}
