import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source.js";
import quizRoutes from "./routes/quizRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/quiz", quizRoutes);

const PORT = process.env.PORT || 5000;

AppDataSource.initialize()
    .then(() => {
        console.log("🐘 Connected to PostgreSQL Database via TypeORM");
        app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.log("❌ Database Connection Error: ", error));