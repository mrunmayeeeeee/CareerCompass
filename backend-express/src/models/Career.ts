import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Career {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  careerTitle!: string;

  @Column({ type: 'text', nullable: true })
  jobDescription!: string;

  @Column({ type: 'varchar', nullable: true })
  averageSalary!: string;

  @Column('text', { array: true, nullable: true })
  requiredSkills!: string[];

  @Column('json', { nullable: true })
  roadmapSteps!: { stepTitle: string; description: string }[];

  @Column('json', { nullable: true })
  learningResources!: { title: string; url: string; isFree: boolean }[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}