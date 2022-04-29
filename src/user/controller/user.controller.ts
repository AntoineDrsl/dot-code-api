import { UpdateSocketUserDto } from './../dto/update-socket-user-dto';
import { User } from './../entity/user.entity';
import { RoomService } from 'src/room/service/room.service';
import { ValidationPipe, Get } from '@nestjs/common';
import { UsePipes } from '@nestjs/common';
import { Body, Controller, Post, Patch, Param } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateGuestUserDto } from "../dto/create-guest-user.dto";
import { UserService } from "../service/user.service";
import { ConnectInRoomUserDto } from "../dto/connect-in-room-user.dto";

@Controller('user')
export class UserController {

    constructor(
        private readonly _userService: UserService,
        private readonly _roomService: RoomService
    ) {
    }

    /**
     * Get user by id
     * 
     * @param id
     */
    @Get(':id')
    public getUserById(@Param('id') id: number): Promise<User>
    {
        return this._userService.getUserById(id);
    }

    /**
     * Create user guest when he connects on the landing page
     *
     * @param userGuestDto
     */
    @Post('guest')
    @UsePipes(new ValidationPipe({ transform: true }))
    public createGuestUser(@Body() userGuestDto: CreateGuestUserDto)
    {
        return this._userService.createGuestUser(userGuestDto);
    }

    /**
     * Update user socket
     *
     * @param id
     * @param updateUserDto
     */
    @Patch(':id/socket')
    public async updateSocket(@Param('id') id: number, @Body() updateSocketUserDto: UpdateSocketUserDto)
    {
        return this._userService.updateUserSocket(id, updateSocketUserDto);
    }

    /**
     * Update user when he joins a room
     *
     * @param id
     * @param updateUserDto
     */
    @Patch(':id/connect')
    public async connect(@Param('id') id: number, @Body() connectInRoomUserDto: ConnectInRoomUserDto)
    {
        const room = await this._roomService.getRoomById(connectInRoomUserDto.room_id);

        return this._userService.updateUserForRoom(id, connectInRoomUserDto, room);
    }

    /**
     * Remove id room from the user when he disconnects from the room
     *
     * @param id
     */
    @Patch(':id/disconnect')
    public async disconnect(@Param('id') id: string)
    {
        // Get user
        const user = await this._userService.getOne(id, {
            relations: ['room', 'team']
        });

        if(!user) {
            return false;
        }

        if(user.team) {
            // Disconnect user from team
            await this._userService.updateNullTeam(id);
        }

        if(user.room) {
            // Disconnect user from room
            await this._userService.updateNullRoom(id);
    
            // Get room and update owner
            await this._roomService.changeOwnerRandom(user.room.id);
        }

        return {"success": `Room id have been successfully removed from the user ${id}`}
    }

}
