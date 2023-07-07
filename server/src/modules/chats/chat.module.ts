import { Module } from '@nestjs/common';
import { ChatGateway } from './gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [ChatGateway],
  exports: [ChatGateway],
})
export class ChatModule {}
