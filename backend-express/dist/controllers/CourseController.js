import { CourseService } from '../services/CourseService.js';
const courseService = new CourseService();
export class CourseController {
    async getCoursesByStream(req, res) {
        try {
            const stream = req.params.stream;
            const courses = await courseService.getCoursesByStream(stream);
            res.json(courses);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async getCourseById(req, res) {
        try {
            const courseId = req.params.id;
            const course = await courseService.getCourseDetails(courseId);
            res.json(course);
        }
        catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
    async compareCourses(req, res) {
        try {
            const { courseId1, courseId2 } = req.body;
            const comparison = await courseService.compareCourses(courseId1, courseId2);
            res.json(comparison);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
