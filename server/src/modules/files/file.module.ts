import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { FileService } from './services';
import { FileController } from './controllers';

@Module({
  imports: [MulterModule.register()],
  controllers: [FileController],
  providers: [FileService],
  exports: [FileService],
})
export class FileModule {}
