import app from "./app.js";

const PORT = process.env.PORT || 3000; // fallback if env missing

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
