import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auths';
import { UserModule } from './modules/users';
import { FileModule } from './modules/files';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbOptions } from './config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ChatModule } from './modules/chats';
import { join } from 'path';
import { RedisModule } from './shared/common';
import { AppController } from './app.controller';

@Module({
  imports: [
    // Config environment
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),

    // Config mariadb
    TypeOrmModule.forRoot(dbOptions()),

    // Config root path to project
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/',
    }),

    // My modules
    RedisModule.forRoot({
      host: process.env.REDIS_HOST,
      port: +process.env.REDIS_PORT,
    }),
    AuthModule,
    UserModule,
    FileModule,
    ChatModule,
    AppController,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
