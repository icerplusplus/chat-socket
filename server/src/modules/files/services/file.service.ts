import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { extname } from 'path';
import * as fsExtra from 'fs-extra';
import { generateDatePath } from '../../../shared/utils/common';
import { File } from '../../../shared/types';

@Injectable()
export class FileService {
  constructor(private readonly configService: ConfigService) {}

  async uploadOneFile(file: Express.Multer.File) {
    // Check file exists
    if (!file) throw new NotFoundException('File not found');

    // Generate file name
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = extname(file.originalname);
    const fileName = `${uniqueSuffix}${extension}`;

    const rootUploadPath = this.configService.get('UPLOAD_LOCATION');
    const filePath =
      generateDatePath({
        folderName: 'images',
        root: rootUploadPath,
      }) +
      '/' +
      fileName;
    // Implement upload logic here
    await fsExtra.move(file.path, `${rootUploadPath}/${filePath}`);
    // Return the file URL or path
    return {
      filename: fileName,
      originalname: file.originalname,
      path: filePath,
      size: file.size,
    } as File;
  }

  async uploadMutipleFiles(files: Express.Multer.File[]): Promise<File[]> {
    const rootUploadPath = this.configService.get('UPLOAD_LOCATION');
    const promiseUploadList = files.map?.(async (file: Express.Multer.File) => {
      const filePath =
        generateDatePath({
          folderName: 'images',
          root: rootUploadPath,
        }) +
        '/' +
        file.filename;

      await fsExtra.move(file.path, `${rootUploadPath}/${filePath}`);
      return {
        originalname: file.originalname,
        filename: file.filename,
        path: filePath,
        size: file.size,
      };
    });

    return Promise.all(promiseUploadList);
  }

  // Delete file by file path
  async deleteFileFromFilePath(fullPath: string): Promise<boolean> {
    const rootUploadPath = this.configService.get('UPLOAD_LOCATION');

    return await fsExtra
      .remove(`${rootUploadPath}/${fullPath}`)
      .then(() => {
        console.log('success!');
        return true;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  }
}
