import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  commentatorId: number;

  @Column()
  commentReceiverId: number;

  @Column()
  commentDate: Date;

  @Column({ length: 512 })
  content: string;

  @Column()
  projectId: number;

  @Column()
  isDeleted: boolean;
}
