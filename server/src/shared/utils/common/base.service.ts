import { Injectable } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class BaseService<T, CreateParams, UpdateParams> {
  constructor(private readonly repository: Repository<T | any>) {}

  async getAll(options?: FindManyOptions): Promise<any[]> {
    console.log('options in base: ', options);
    return await this.repository.find(options);
  }

  async getById(id: string, options?: FindManyOptions): Promise<any> {
    const data = await this.repository.findOne({
      where: { id },
      ...options,
    });
    return data;
  }

  async create(createParams: CreateParams | any): Promise<any> {
    return this.repository.save(createParams);
  }

  async update(
    id: string | any,
    updateParams: UpdateParams | any,
  ): Promise<any> {
    await this.repository.update({ id: id }, updateParams);
    return this.repository.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
