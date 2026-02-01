import { Repository } from 'typeorm';
import { Career } from '../models/Career.js';
import { AppDataSource } from '../data-source.js';

export class CareerRepository {
  private repository: Repository<Career>;

  constructor() {
    this.repository = AppDataSource.getRepository(Career);
  }

  // Find all careers or filter by a specific title
  async findAll(filter: Partial<Career> = {}) {
    if (Object.keys(filter).length === 0) {
      return await this.repository.find();
    }
    return await this.repository.find({ where: filter as any });
  }

  // Find a specific career to display its roadmap and salary details
  async findById(careerId: number) {
    return await this.repository.findOne({ where: { id: careerId } });
  }

  // Find careers that require specific skills
  async findBySkill(skill: string) {
    return await this.repository
      .createQueryBuilder('career')
      .where(':skill = ANY(career.requiredSkills)', { skill })
      .getMany();
  }

  // Admin: Create or update career paths and roadmap steps
  async create(careerData: Partial<Career>) {
    const newCareer = this.repository.create(careerData);
    return await this.repository.save(newCareer);
  }
}