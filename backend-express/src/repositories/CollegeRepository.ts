import { Repository } from 'typeorm';
import { College } from '../models/College.js';
import { AppDataSource } from '../data-source.js';

export class CollegeRepository {
  private repository: Repository<College>;

  constructor() {
    this.repository = AppDataSource.getRepository(College);
  }

  // Find all colleges or filter by location
  async findAll(filter: Partial<College> = {}) {
    return await this.repository.find({ where: filter });
  }

  // Find colleges offering a specific course to help with decision making
  async findByCourseId(courseId: number) {
    return await this.repository
      .createQueryBuilder('college')
      .where('college.offeredCourses @> :course', { course: JSON.stringify([{ courseId }]) })
      .getMany();
  }

  // Find a specific college by its ID
  async findById(collegeId: number) {
    return await this.repository.findOne({ where: { id: collegeId } });
  }

  // Admin: Add new college data including cutoffs
  async create(collegeData: Partial<College>) {
    const newCollege = this.repository.create(collegeData);
    return await this.repository.save(newCollege);
  }
}