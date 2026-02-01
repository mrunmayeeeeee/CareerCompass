import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  courseName!: string;

  @Column({ type: 'text', nullable: true })
  description!: string;

  @Column({ type: 'int', nullable: true })
  durationYears!: number;

  @Column({ type: 'varchar', nullable: true })
  fees!: string;

  @Column({ type: 'text', nullable: true })
  eligibilityCriteria!: string;

  @Column({
    type: 'enum',
    enum: ['Science', 'Commerce', 'Arts'],
    nullable: true
  })
  stream!: string;

  @Column({ type: 'text', nullable: true })
  futureScope!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}