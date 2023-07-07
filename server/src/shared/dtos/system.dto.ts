import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from './base.dto';
import { Expose } from 'class-transformer';

export class SystemDto extends BaseDto {
  @ApiProperty()
  @Expose()
  systemName: string;

  @ApiProperty()
  @Expose()
  version: string;

  @ApiProperty()
  @Expose()
  description: string;

  @ApiProperty()
  @Expose()
  installationDate: Date;
}
