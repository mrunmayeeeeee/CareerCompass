import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'varchar', unique: true })
  email!: string;

  @Column({ type: 'varchar' })
  passwordHash!: string;

  @Column({
    type: 'enum',
    enum: ['Science', 'Commerce', 'Arts'],
    nullable: true
  })
  stream!: string;

  @Column({ type: 'varchar', default: 'Student' })
  currentRole!: string;

  @Column('text', { array: true, nullable: true })
  skills!: string[];

  @Column('text', { array: true, nullable: true })
  interests!: string[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}