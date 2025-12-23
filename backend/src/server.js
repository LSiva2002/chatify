import authRoutes from "./routes/auth.route.js";
import express from "express";
import dotenv from "dotenv";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";



dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.listen(port || 3000, () => {
    console.log(`Server running on port ${port}`);
    connectDB();
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


