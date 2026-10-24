import express, { type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------
app.use(helmet());
app.use(
  cors({
    origin: process.env["CLIENT_URL"] ?? "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------

/** Health-check endpoint */
app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    service: "finova-api",
    timestamp: new Date().toISOString(),
  });
});

// ---------------------------------------------------------------------------
// Centralized error handler
// ---------------------------------------------------------------------------
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(`[ERROR] ${err.message}`);
  res.status(500).json({
    status: "error",
    message:
      process.env["NODE_ENV"] === "production"
        ? "Internal server error"
        : err.message,
  });
});

export default app;
