import express from "express";
import path from "path";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;
const isDev = process.env.NODE_ENV !== "production";

// Enable CORS in development
if (isDev) {
  app.use(
    cors({
      origin: "http://localhost:5173", // allow Vite frontend
      credentials: true, // if you use cookies/auth
    })
  );
  console.log("Running in development mode with CORS enabled");
} else {
  console.log("Running in production mode");
}

// JSON parsing
app.use(express.json());

// Example API route
app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello from the backend" });
});

// Serve static files from React build in production
if (!isDev) {
  const clientBuildPath = path.join(__dirname, "../client/dist");
  app.use(express.static(clientBuildPath));

  // Fallback to index.html for SPA routing
  app.get("*", (_req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
