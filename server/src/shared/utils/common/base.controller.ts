import {
  Body,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BaseService } from './base.service';

export class BaseController<T, CreateDto = any, UpdateDto = any> {
  constructor(private readonly service: BaseService<T, any, any>) {}

  @Get()
  async getAll(): Promise<T[]> {
    return await this.service.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<T> {
    return await this.service.getById(id);
  }

  @Post()
  async create(@Body() createDto: CreateDto): Promise<T> {
    return this.service.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDto: UpdateDto,
  ): Promise<T> {
    return await this.service.update(id, updateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
