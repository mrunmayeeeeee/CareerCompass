import { Schema } from "mongoose";
const QuizQuestion = new Schema({
    questionText: { type: String, required: true }, // [cite: 261]
    options: [{
            optionText: { type: String, required: true }, // [cite: 263]
            associatedCareerId: { type: Schema.Types.ObjectId, ref: 'Career' } // [cite: 263]
        }]
});
export default QuizQuestion;
