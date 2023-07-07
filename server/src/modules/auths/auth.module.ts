import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controllers';
import { JwtStrategy, LocalStrategy } from '../../shared/strategies';
import { AuthService } from './services';
import { UserModule } from '../users';
import { FileModule, FileService } from '../files';

@Module({
  imports: [
    // Config jwt service
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '300s' },
    }),
    PassportModule,
    UserModule,
    FileModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, FileService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
