import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  username: string;

  @Column({ length: 64 })
  firstName: string;

  @Column({ length: 64 })
  lastName: string;

  @Column()
  avatar: string;

  @Column({ length: 128 })
  projectRole: string;

  @Column({ default: '2021-01-01 00:00:00' })
  joinedAt?: Date;

  @Column()
  isFemale: boolean;

  @Column()
  isAdmin: boolean;

  @Column()
  isDeleted: boolean;
}
