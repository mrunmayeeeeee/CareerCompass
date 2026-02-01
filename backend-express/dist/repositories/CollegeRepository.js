import College from '../models/College.js';
export class CollegeRepository {
    // Find all colleges or filter by location
    async findAll(filter = {}) {
        return await College.find(filter).populate('offeredCourses.courseId');
    }
    // Find colleges offering a specific course to help with decision making 
    async findByCourseId(courseId) {
        return await College.find({ 'offeredCourses.courseId': courseId })
            .populate('offeredCourses.courseId');
    }
    // Find a specific college by its ID [cite: 249]
    async findById(collegeId) {
        return await College.findById(collegeId).populate('offeredCourses.courseId');
    }
    // Admin: Add new college data including cutoffs [cite: 124]
    async create(collegeData) {
        const newCollege = new College(collegeData);
        return await newCollege.save();
    }
}
