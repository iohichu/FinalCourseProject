const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3400;

// Подключение к MongoDB
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Middleware
app.use(express.json());

// Тестовый роут
app.get("/api/status", (req, res) => {
  res.json({ status: "API is running" });
});

// Запуск сервера
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

