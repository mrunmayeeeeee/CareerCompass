import { CourseRepository } from '../repositories/CourseRespository.js'; 

const courseRepository = new CourseRepository();

export class CourseService {
  async getCoursesByStream(stream: string) {
    const validStreams = ['Science', 'Commerce', 'Arts']; 
    if (!validStreams.includes(stream)) {
      throw new Error("Invalid academic stream selected");
    }
    return await courseRepository.findByStream(stream);
  }

  async getCourseDetails(courseId: string) {
    const course = await courseRepository.findById(courseId);
    if (!course) {
      throw new Error("Course not found");
    }
    return course;
  }

  async compareCourses(courseId1: string, courseId2: string) {
    const course1 = await courseRepository.findById(courseId1);
    const course2 = await courseRepository.findById(courseId2);
    
    if (!course1 || !course2) {
      throw new Error("One or both courses not found for comparison"); 
    }

    return { course1, course2 };
  }
}