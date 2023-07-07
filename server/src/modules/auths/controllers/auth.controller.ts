import {
  Body,
  Controller,
  Post,
  Get,
  Request,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthService } from '../services/auth.service';
import { multerOptions } from '../../../shared/utils/common';
import {
  LocalAuthGuard,
  RefreshTokenGuard,
  RolesGuard,
} from '../../../shared/guards';
import { Role } from '../../../shared/constants';
import { Roles } from '../../../shared/decorators';
import { Token } from '../../../shared/types';
import { AuthDto, CreateUserDto } from '../../../shared/dtos';
import { FileService } from '../../files';

@ApiTags('Auths')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly filesService: FileService,
  ) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req): Promise<Partial<AuthDto>> {
    return AuthDto.plainToClass(await this.authService.login(req.user));
  }

  @Post('register')
  @UseInterceptors(FileInterceptor('avatar', multerOptions)) // validate, filter file
  async register(
    @UploadedFile() file: Express.Multer.File,
    @Body() createUserDto: CreateUserDto,
  ): Promise<Partial<AuthDto>> {
    // Upload avatar
    const avatar = (await this.filesService.uploadOneFile(file)).path;
    // Filters the properties: password, ...
    return AuthDto.plainToClass(
      await this.authService.register({ ...createUserDto, avatar }),
    );
  }

  @Get('refresh')
  @ApiBearerAuth()
  @UseGuards(RefreshTokenGuard)
  async refreshToken(@Request() req): Promise<Partial<Token>> {
    return await this.authService.refresh(req.user);
  }

  @ApiBearerAuth()
  @UseGuards(RefreshTokenGuard, RolesGuard)
  @Roles(Role.Admin)
  @Post('rollback-token')
  rollbackToken(@Request() req): Promise<boolean> {
    return this.authService.rollbackToken(req.user.sub);
  }
}
