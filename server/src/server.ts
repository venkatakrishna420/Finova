import "dotenv/config";
import app from "./app.js";

const PORT = parseInt(process.env["PORT"] ?? "3001", 10);

app.listen(PORT, () => {
  console.log(`🚀 Finova API running on http://localhost:${PORT}`);
  console.log(`   Health check → http://localhost:${PORT}/api/health`);
});
