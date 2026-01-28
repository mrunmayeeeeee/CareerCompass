import { CollegeRepository } from '../repositories/CollegeRepository.js';

const collegeRepository = new CollegeRepository();

export class CollegeService {
  // Logic to get all top colleges with their descriptions [cite: 249]
  async getAllColleges() {
    return await collegeRepository.findAll();
  }

  // Logic to suggest colleges based on a specific course 
  async getCollegesByCourse(courseId: string) {
    if (!courseId) {
      throw new Error("Course ID is required to fetch colleges");
    }
    return await collegeRepository.findByCourseId(courseId);
  }

  // Logic to view specific college details and its official website link [cite: 124]
  async getCollegeDetails(collegeId: string) {
    const college = await collegeRepository.findById(collegeId);
    if (!college) {
      throw new Error("College not found");
    }
    return college;
  }
}