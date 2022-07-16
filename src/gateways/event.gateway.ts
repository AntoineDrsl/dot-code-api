import { TeamService } from './../team/service/team.service';
import { RoomService } from 'src/room/service/room.service';
import {
  ConnectedSocket,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  MessageBody
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class EventGateway {

  @WebSocketServer() server: Server;

  constructor(
    private readonly _roomService: RoomService,
    private readonly _teamService: TeamService
  ) {}

  @SubscribeMessage('joinRoom')
  public async joinRoom(@ConnectedSocket() client: Socket, @MessageBody() body)
  {
    client.join(body.pin);
  }

  @SubscribeMessage('userSendPseudo')
  public async userSendPseudo(@ConnectedSocket() client: Socket, @MessageBody() body)
  {
    const room = await this._roomService.getRoomDetailsByPin(body.pin);

    client.broadcast.to(body.pin).emit('userSendPseudo', room);
  }
  
  @SubscribeMessage('userJoinsRoom')
  public async userJoinsRoom(@ConnectedSocket() client: Socket, @MessageBody() body)
  {
    const room = await this._roomService.getRoomDetailsByPin(body.pin);

    client.join(body.pin);
    client.broadcast.to(body.pin).emit('userJoinsRoom', room);
  }

  @SubscribeMessage('changeRoomMode')
  public async changeRoomMode(@ConnectedSocket() client: Socket, @MessageBody() body)
  {
    const room = await this._roomService.getRoomDetailsByPin(body.pin);

    this.server.sockets.in(body.pin).emit('changeRoomMode', room);
  }

  @SubscribeMessage('userJoinsTeam')
  public async userJoinsTeam(@ConnectedSocket() client: Socket, @MessageBody() body)
  {
    const room = await this._roomService.getRoomDetailsByPin(body.pin);

    this.server.sockets.in(body.pin).emit('userJoinsTeam', room)
  }

  @SubscribeMessage('launchGame')
  public async launchGame(@ConnectedSocket() client: Socket, @MessageBody() body)
  {
    // Get room
    const room = await this._roomService.getRoomDetailsByPin(body.pin);

    // Check room not already started
    if(room.has_started) {
      return { error: "Room has already started" }
    }

    // Check room mode is set
    if(!room.mode) {
      return { error: "Room mode not set" }
    }

    // Create teams
    if(room.mode == 'vs') {
      const teams = await this._teamService.createTeams([
        {
          room: room.id,
          name: 'Ixion'
        },
        {
          room: room.id,
          name: 'Météion'
        }
      ]);
      room.teams = teams;
    } else if(room.mode == 'multi') {
      // TODO - Coop
    }

    // Update room has_started
    this._roomService.changeHasStarted(room.id, true);

    this.server.sockets.in(body.pin).emit('launchGame', room);
  }

  @SubscribeMessage('validateTeams')
  public async validateTeams(@ConnectedSocket() client: Socket, @MessageBody() body)
  {
    // Get room
    const room = await this._roomService.getRoomDetailsByPin(body.pin);

    // Check not empty team
    if(!room.teams[0].users?.length || !room.teams[1].users?.length) {
      return { error: "A team is empty" }
    }

    this.server.sockets.in(body.pin).emit('validateTeams', room);
  }

  @SubscribeMessage('userCursorChange')
  public userCursorChange(@ConnectedSocket() client: Socket, @MessageBody() body) {
    client.broadcast.to(body.pin).emit('userCursorChange', {
      user: body.user,
      position: body.position
    });
  }

  @SubscribeMessage('newTextInsert')
  public newTextInsert(@ConnectedSocket() client: Socket, @MessageBody() body) {
    client.to(body.pin).emit('newTextInsert', body);
  }

  @SubscribeMessage('newTextDelete')
  public newTextDelete(@ConnectedSocket() client: Socket, @MessageBody() body) {
    client.to(body.pin).emit('newTextDelete', body);
  }

  @SubscribeMessage('onTab')
  public onTab(@ConnectedSocket() client: Socket, @MessageBody() body) {
    client.to(body.pin).emit('onTab', body);
  }

  /**
   * When next exercice is reached
   *
   * @param client
   * @param body
   */
  @SubscribeMessage('nextExercise')
  public nextExercise(@ConnectedSocket() client: Socket, @MessageBody() body)
  {
    client.to(body.pin).emit('opponentSuccess');
  }

}
