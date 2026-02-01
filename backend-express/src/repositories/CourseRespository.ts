import { Repository } from 'typeorm';
import { Course } from '../models/Course.js';
import { AppDataSource } from '../data-source.js';

export class CourseRepository {
  private repository: Repository<Course>;

  constructor() {
    this.repository = AppDataSource.getRepository(Course);
  }

  async findByStream(streamName: string) {
    return await this.repository.find({ where: { stream: streamName } });
  }

  async findById(courseId: number) {
    return await this.repository.findOne({ where: { id: courseId } });
  }

  async create(courseData: Partial<Course>) {
    const newCourse = this.repository.create(courseData);
    return await this.repository.save(newCourse);
  }
}