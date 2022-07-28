import { UpdateUserPseudoDto } from './../dto/update-user-pseudo.dto';
import { UpdateUserSocketDto } from '../dto/update-user-socket.dto';
import { Repository, EntityRepository } from "typeorm";
import { User } from "../entity/user.entity";
import { CreateGuestUserDto } from "../dto/create-guest-user.dto";
import { uuid } from "uuidv4";
import { Room } from "../../room/entity/room.entity";
import { ConnectInRoomUserDto } from "../dto/connect-in-room-user.dto";
import { CreateUserDto } from "../dto/create-user.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    /**
     * Création d'un utilisateur guest (lors de sa connection sur la page home)
     *
     * @param userGuestDto
     */
    public async createGuestUser(userGuestDto: CreateGuestUserDto)
    {
        const user = this.create({
            slug: uuid(),
            is_guest: true,
            ...userGuestDto
        });

        return await this.save(user);
    }

    public async createUser(createUser: CreateUserDto) {
        const user = this.create({
            slug: uuid(),
            is_guest: true,
            ...createUser
        });
        return await this.save(user);
    }

    /**
     * Création d'un utilisateur entier
     *
     * @param userDto
     * @param id
     */
    public async updateGuestIntoUser(userDto: CreateUserDto, id: number)
    {
        const user = this.create({
            is_guest: false,
            ...userDto
        });

        return await this.save({id: id, ...user});
    }


    /**
     * Update a user when he connects into a room
     *
     * @param id
     * @param connectInRoomUserDto
     * @param room
     */
    public async updateUserForRoom(id: number, connectInRoomUserDto: ConnectInRoomUserDto, room: Room)
    {
        const { pseudo } = connectInRoomUserDto;

        const user = this.create({
            room: room,
            pseudo
        });

        return await this.update(id, user);
    }

    /**
     * Update user socket
     *
     * @param id
     * @param updateUserSocketDto
     * @returns
     */
    public async updateUserSocket(id: number, updateUserSocketDto: UpdateUserSocketDto)
    {
        const { socket_id } = updateUserSocketDto;

        const user = this.create({
            socket_id
        });

        return await this.update(id, user);
    }

    /**
     * Update user socket
     *
     * @param id
     * @param updateUserPseudoDto
     * @returns
     */
    public async updateUserPseudo(id: number, updateUserPseudoDto: UpdateUserPseudoDto)
    {
        const { pseudo } = updateUserPseudoDto;

        const user = this.create({
            pseudo
        });

        return await this.update(id, user);
    }
}
