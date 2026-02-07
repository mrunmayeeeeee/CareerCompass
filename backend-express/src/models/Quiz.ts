// Add CreateDateColumn to the list of imports
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("questions")
export class QuizQuestion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category: string;

    @Column({ name: "question_text", type: "text" })
    questionText: string;

    @Column({ name: "option_a" })
    optionA: string;

    @Column({ name: "option_b" })
    optionB: string;

    @Column({ name: "option_c" })
    optionC: string;

    @Column({ name: "option_d" })
    optionD: string;

    @Column({ name: "correct_option", length: 1 })
    correctOption: string;

    // This will now work because it is imported above
    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;
}