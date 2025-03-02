import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  setupAuth(app);

  // Mock chatbot endpoint - integrate with Gemini API
  app.post("/api/chat", (req, res) => {
    const { message } = req.body;
    // Add Gemini API integration here
    res.json({ response: "Mock response - integrate Gemini API" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
