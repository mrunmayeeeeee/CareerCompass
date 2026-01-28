import Course from '../models/Course.js'; // Added .js extension

export class CourseRepository {
  async findByStream(streamName: string) {
    return await Course.find({ stream: streamName }); 
  }

  async findById(courseId: string) {
    return await Course.findById(courseId);
  }

  async create(courseData: any) {
    const newCourse = new Course(courseData);
    return await newCourse.save();
  }
}