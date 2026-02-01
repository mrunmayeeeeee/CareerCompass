import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class College {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  collegeName!: string;

  @Column({ type: 'varchar', nullable: true })
  location!: string;

  @Column({ type: 'varchar', nullable: true })
  websiteUrl!: string;

  @Column({ type: 'text', nullable: true })
  description!: string;

  @Column('json', { nullable: true })
  offeredCourses!: { courseId: number; cutoff: string }[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}