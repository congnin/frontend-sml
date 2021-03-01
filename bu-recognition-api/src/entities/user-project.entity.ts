import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserProject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  projectId: number;

  @Column()
  joinDate: Date;

  @Column()
  isActive: boolean;

  @Column()
  isDeleted: boolean;
}
