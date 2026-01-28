import Career from '../models/Career.js';

export class CareerRepository {
  // Find all careers or filter by a specific title
  async findAll(filter: object = {}) {
    return await (Career as any).find(filter);
  }

  // Find a specific career to display its roadmap and salary details [cite: 118, 126]
  async findById(careerId: string) {
    return await (Career as any).findById(careerId);
  }

  // Find careers that require specific skills [cite: 118]
  async findBySkill(skill: string) {
    return await (Career as any).find({ requiredSkills: { $in: [skill] } });
  }

  // Admin: Create or update career paths and roadmap steps [cite: 151, 452]
  async create(careerData: any) {
    const newCareer = new (Career as any)(careerData);
    return await newCareer.save();
  }
}