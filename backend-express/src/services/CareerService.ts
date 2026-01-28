import { CareerRepository } from '../repositories/CareerRepository.js';

const careerRepository = new CareerRepository();

export class CareerService {
  // Logic to fetch all available career paths for the explorer [cite: 162]
  async getAllCareers() {
    return await careerRepository.findAll();
  }

  // Logic to get the step-by-step roadmap for a specific goal [cite: 436]
  async getCareerRoadmap(careerId: string) {
    const career = await careerRepository.findById(careerId);
    if (!career) {
      throw new Error("Career path not found");
    }
    return {
      title: career.careerTitle,
      steps: career.roadmapSteps, // [cite: 126]
      salary: career.averageSalary // [cite: 118]
    };
  }

  // Logic to filter for free and curated learning resources only 
  async getFreeResources(careerId: string) {
    const career = await careerRepository.findById(careerId);
    if (!career) {
      throw new Error("Career path not found");
    }
    // Ensures only free resources are returned as per project goals [cite: 200]
    return career.learningResources.filter((resource: { isFree: boolean; }) => resource.isFree === true);
  }
}