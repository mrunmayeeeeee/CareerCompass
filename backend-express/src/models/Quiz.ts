import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("questions")
export class QuizQuestion {
    @PrimaryGeneratedColumn()
    id: number;

    // Add { type: "varchar" } or { type: "text" } explicitly
    @Column({ type: "varchar", length: 50 }) 
    category: string;

    @Column({ name: "question_text", type: "text" })
    questionText: string;

    @Column({ name: "option_a", type: "varchar" })
    optionA: string;

    @Column({ name: "option_b", type: "varchar" })
    optionB: string;

    @Column({ name: "option_c", type: "varchar" })
    optionC: string;

    @Column({ name: "option_d", type: "varchar" })
    optionD: string;

    @Column({ name: "correct_option", type: "char", length: 1 })
    correctOption: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;
}