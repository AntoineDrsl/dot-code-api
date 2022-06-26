import { TeamService } from './../../team/service/team.service';
import { UserService } from '../../user/service/user.service';
import { CreateRoomDto } from '../dto/create-room.dto';
import { RoomService } from '../service/room.service';
import {
    Controller,
    Post,
    UsePipes,
    ValidationPipe,
    Body,
    Param,
    Get,
    Delete
} from '@nestjs/common';
import { Room } from "../entity/room.entity";

@Controller('room')
export class RoomController {

    constructor(
        private readonly _roomService: RoomService,
        private readonly _userService: UserService,
        private readonly _teamService: TeamService
    ) {}

    @Get(':id')
    public getRoomById(@Param('id') id: number): Promise<Room>
    {
        return this._roomService.getRoomById(id);
    }

    @Get('pin/:pin')
    public getRoomDetailsByPin(@Param('pin') pin: string): Promise<Room>
    {
        return this._roomService.getRoomDetailsByPin(pin);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    public async createRoom(@Body() createRoomDto: CreateRoomDto): Promise<Room>
    {
        // Create room
        const room = await this._roomService.createRoom(createRoomDto);

        // Update user room
        await this._userService.updateUserRoom(room.owner.id, room);

        return room;
    }

    @Post('/with-teams')
    @UsePipes(new ValidationPipe())
    public async createRoomWithTeams(@Body() createRoomDto: CreateRoomDto): Promise<Room>
    {
        // Create room
        const room = await this._roomService.createRoom(createRoomDto);

        // Create teams
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

        // Update user room
        await this._userService.updateUserRoom(room.owner.id, room);

        return room;
    }

    @Delete('/:id')
    public deleteRoom(@Param('id') id: number): Promise<void> {
        return this._roomService.deleteRoom(id);
    }
}
