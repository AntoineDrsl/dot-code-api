import { Team } from '../../team/entity/team.entity';
import { UpdateUserPseudoDto } from '../dto/update-user-pseudo.dto';
import { UpdateUserSocketDto } from '../dto/update-user-socket.dto';
import { Room } from '../../room/entity/room.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entity/user.entity";
import { CreateGuestUserDto } from "../dto/create-guest-user.dto";
import { UserRepository } from "../repository/user.repository";
import { ConnectInRoomUserDto } from "../dto/connect-in-room-user.dto";
import { FindOneOptions } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly _userRepository: UserRepository,
    ) {
    }

    public async getUserById(id: number): Promise<User>
    {
        const user = await this._userRepository.findOne({ 
            where: { id }, 
            relations: ['room', 'team']
        });

        if(!user) {
            throw new NotFoundException(`User with ID "${id}" not found`);
        }

        return user;
    }

    /**
     * Return a user by parameter
     *
     * @param param
     */
    public async getUserByParam(param: FindOneOptions)
    {
        return await this._userRepository.findOne(param);
    }

    /**
     * Add User to a Room
     *
     * @param id
     * @param room
     */
    public async updateUserRoom(id: number, room: Room): Promise<User>
    {
        const user = await this.getUserById(id);

        user.room = room;
        await this._userRepository.save(user);

        return user;
    }

    public async updateUserSocket(id: number, updateUserSocketDto: UpdateUserSocketDto)
    {
        return this._userRepository.updateUserSocket(id, updateUserSocketDto);
    }

    public async updateUserPseudo(id: number, updateUserPseudoDto: UpdateUserPseudoDto)
    {
        return this._userRepository.updateUserPseudo(id, updateUserPseudoDto);
    }

    public async updateUserTeam(id: number, team: Team)
    {
        const user = await this.getUserById(id);

        user.team = team;
        await this._userRepository.save(user);

        return user;
    }

    /**
     * Create a guest user (When he connects on the landing page)
     *
     * @param userGuest
     */
    public createGuestUser(userGuest: CreateGuestUserDto)
    {
        return this._userRepository.createGuestUser(userGuest);
    }

    /**
     * Create a user
     *
     * @param user
     */
    public createUser(user: CreateUserDto)
    {
        return this._userRepository.createUser(user);
    }

    /**
     * Create a user when he registers
     *
     * @param user
     * @param id
     */
    public updateGuestIntoUser(user: CreateUserDto, id: number)
    {
        return this._userRepository.updateGuestIntoUser(user, id);
    }

    /**
     * When a user join a Room
     *
     * @param userId
     * @param updateUserDto
     * @param room
     */
    public updateUserForRoom(userId: number, updateUserDto: ConnectInRoomUserDto, room: Room)
    {
        return this._userRepository.updateUserForRoom(userId, updateUserDto, room)
    }

    /**
     * Return user with his room
     *
     * @param id
     * @param options
     */
    public getOne(id: string, options: FindOneOptions)
    {
        return this._userRepository.findOne(id, options);
    }

    /**
     * Remove room on user
     *
     * @param id
     */
    public updateNullRoom(id: string)
    {
        return this._userRepository.update(id, {room: null});
    }

    /**
     * Remove team on user
     *
     * @param id
     */
    public updateNullTeam(id: string)
    {
        return this._userRepository.update(id, { team: null });
    }

    /**
     * Remove a user by his ID
     *
     * @param user
     */
    public async removeUserById(user: User)
    {
        return this._userRepository.remove(user);
    }
}
