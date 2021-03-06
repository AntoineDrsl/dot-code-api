import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany} from 'typeorm';
import {ModeEnum} from "../enums/mode.enum";
import {AccessEnum} from "../enums/access.enum";
import { StatusEnum } from '../enums/status.enum';
import {User} from "../../user/entity/user.entity";
import {Game} from "../../game/entity/game.entity";
import {Team} from "../../team/entity/team.entity";

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    slug: string

    @OneToOne(() => User)
    @JoinColumn({ name: 'owner_id' })
    owner: User

    @OneToOne(() => Game)
    @JoinColumn({ name: 'game_id' })
    game: Game

    @OneToMany(() => Team, (team: Team) => team.room)
    teams: Team[]

    @OneToMany(() => User, (user: User) => user.room)
    users: User[]

    @Column({ nullable: true })
    mode: ModeEnum;

    @Column()
    name: string;

    @Column()
    pin: string;

    @Column()
    access: AccessEnum;

    @Column({ default: false })
    has_started: boolean;

    @Column()
    status: StatusEnum;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: string;
}