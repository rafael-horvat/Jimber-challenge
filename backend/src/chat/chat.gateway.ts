import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Server } from "socket.io";
import {Injectable} from "@nestjs/common";

@Injectable()
@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server: Server;

  users: number = 0;


  @SubscribeMessage('message')
  async handleMessage(client, message) {
    client.broadcast.emit('message', message);
  }

  @SubscribeMessage('join')
  async handleJoin(client, payload) {
    client.broadcast.emit('join', payload);
  }


  async handleConnection() {
    this.users++;
    this.server.emit('users', this.users);
  }

  async handleDisconnect() {
    this.users--;
    this.server.emit('users', this.users);
  }

}
