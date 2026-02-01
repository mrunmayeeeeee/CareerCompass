import Course from '../models/Course.js'; // Added .js extension
export class CourseRepository {
    async findByStream(streamName) {
        return await Course.find({ stream: streamName });
    }
    async findById(courseId) {
        return await Course.findById(courseId);
    }
    async create(courseData) {
        const newCourse = new Course(courseData);
        return await newCourse.save();
    }
}
