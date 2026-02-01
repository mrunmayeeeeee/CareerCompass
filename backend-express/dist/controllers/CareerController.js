import { CareerService } from '../services/CareerService.js';
const careerService = new CareerService();
export class CareerController {
    async getAllCareers(req, res) {
        try {
            const careers = await careerService.getAllCareers();
            res.json(careers);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getCareerById(req, res) {
        try {
            const careerId = req.params.id;
            const career = await careerService.getCareerDetails(careerId);
            res.json(career);
        }
        catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
    async getCareerRoadmap(req, res) {
        try {
            const careerId = req.params.id;
            const roadmap = await careerService.getCareerRoadmap(careerId);
            res.json(roadmap);
        }
        catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
    async getFreeResources(req, res) {
        try {
            const careerId = req.params.id;
            const resources = await careerService.getFreeResources(careerId);
            res.json(resources);
        }
        catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}
