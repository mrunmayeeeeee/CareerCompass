import { CollegeService } from '../services/CollegeService.js';
const collegeService = new CollegeService();
export class CollegeController {
    async getAllColleges(req, res) {
        try {
            const colleges = await collegeService.getAllColleges();
            res.json(colleges);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getCollegeById(req, res) {
        try {
            const collegeId = req.params.id;
            const college = await collegeService.getCollegeDetails(collegeId);
            res.json(college);
        }
        catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
    async getCollegesByCourse(req, res) {
        try {
            const courseId = req.params.courseId;
            const colleges = await collegeService.getCollegesByCourse(courseId);
            res.json(colleges);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
