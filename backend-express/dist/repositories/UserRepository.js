import User from '../models/User.js';
export class UserRepository {
    // Find a user by email for login/registration checks [cite: 175]
    async findByEmail(email) {
        return await User.findOne({ email });
    }
    // Find a specific user by ID to populate their dashboard [cite: 163]
    async findById(userId) {
        return await User.findById(userId);
    }
    // Create a new user record 
    async create(userData) {
        const newUser = new User(userData);
        return await newUser.save();
    }
    // Update user progress or stream interests 
    async update(userId, updateData) {
        return await User.findByIdAndUpdate(userId, updateData, { new: true });
    }
    // Find all users
    async findAll() {
        return await User.find();
    }
}
