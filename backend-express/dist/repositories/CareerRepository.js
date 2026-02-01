import Career from '../models/Career.js';
export class CareerRepository {
    // Find all careers or filter by a specific title
    async findAll(filter = {}) {
        return await Career.find(filter);
    }
    // Find a specific career to display its roadmap and salary details [cite: 118, 126]
    async findById(careerId) {
        return await Career.findById(careerId);
    }
    // Find careers that require specific skills [cite: 118]
    async findBySkill(skill) {
        return await Career.find({ requiredSkills: { $in: [skill] } });
    }
    // Admin: Create or update career paths and roadmap steps [cite: 151, 452]
    async create(careerData) {
        const newCareer = new Career(careerData);
        return await newCareer.save();
    }
}
