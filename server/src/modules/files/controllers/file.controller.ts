import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from '../services';
import { multerOptions } from 'src/shared/utils/common';

@Controller('files')
export class FileController {
  constructor(private readonly filesService: FileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<{ url: string }> {
    return { url: (await this.filesService.uploadOneFile(file)).path };
  }
}
