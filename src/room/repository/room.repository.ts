import { UpdateRoomModeDto } from './../dto/update-room-mode';
import { AccessEnum } from '../enums/access.enum';
import { StatusEnum } from '../enums/status.enum';
import { uuid } from 'uuidv4';
import { CreateRoomDto } from '../dto/create-room.dto';
import { EntityRepository, Repository, createQueryBuilder } from "typeorm";
import { Room } from "../entity/room.entity";

@EntityRepository(Room)
export class RoomRepository extends Repository<Room> {

    public getAllRoomInformation (roomPin: string)
    {
        return createQueryBuilder('room', 'r')
            .innerJoinAndSelect('r.team', 't')
            .leftJoinAndSelect('t.user', 'u')
            .where('r.pin = :pin', {pin: roomPin})
            .getOne();
    }
    
    public async createRoom(createRoomDto: CreateRoomDto, pin: string, name: string): Promise<Room>
    {
        const { owner_id } = createRoomDto;

        const room = this.create({
            slug: uuid(),
            pin,
            name,
            owner: {
                id: owner_id
            },
            access: AccessEnum.PRIVATE,
            status: StatusEnum.ON
        });

        await this.save(room);
        return room;
    }

    /**
     * Update room mode
     * 
     * @param id 
     * @param updateRoomMode
     */
    public async updateRoomMode(id: number, updateRoomModeDto: UpdateRoomModeDto)
    {
        const { mode } = updateRoomModeDto;

        const room = this.create({
            mode
        });

        return await this.update(id, room);
    }
}