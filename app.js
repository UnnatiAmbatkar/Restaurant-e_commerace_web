import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservation from './routes/reservation.js'

const app = express();
dotenv.config({ path: "./config/.env" });


app.use(cors({
    origin: [process.env.FRONTEND_URI || "http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
    optionsSuccessStatus: 200,
})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation",reservation);

dbConnection();

app.use(errorMiddleware)

export default app;