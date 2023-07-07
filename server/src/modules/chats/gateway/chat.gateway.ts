// chat.gateway.ts
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { RedisService } from '../../../shared/common';

enum SocketEvent {
  'New' = 'new',
  'Connected' = 'connected',
  'Disconnected' = 'disconnected',
  'Joined' = 'joined',
  'Message' = 'message',
}

interface SocketData {
  content: string;
  to?: string;
  clientSocketId?: string;
}

@WebSocketGateway({
  cors: {
    origin: '*',
    credentials: true,
  },
  transports: ['websocket', 'polling'],
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly redisService: RedisService) {}

  // Connection
  handleConnection(socket: Socket) {
    // When a new user connects, you can perform actions here.
    console.log('Connected...', socket.data);

    // For example, you can send a welcome message to the user.
    this.server.emit('new', 'A new user has joined the chat.');
  }

  // Disconnect
  handleDisconnect(socket: Socket) {
    // Handle user disconnection here.
    console.log('Disconnecting...', socket.data);
    // const username = this.users[socket.id];
    // delete this.users[socket.id];
    // this.server.emit('userDisconnected', `${username} has left the chat.`);
  }

  // Join event
  @SubscribeMessage('join')
  handleJoin(socket: Socket, username: string) {
    // Handle user join event.
    // this.users[socket.id] = username;
    this.server.emit('joined', `${username} has joined the chat.`);
  }

  // Main
  @SubscribeMessage(SocketEvent.Message)
  handleMessage(
    @ConnectedSocket() socket: Socket,
    @MessageBody() data: SocketData,
  ) {
    console.log('data: ', data);
    // User to friend
    if (data.to) {
      this.server.to(data.to.toString()).emit(SocketEvent.Message, data);
    } else {
      this.server.emit(SocketEvent.Message, data);
    }
    // User to group
  }
}
