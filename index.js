const express = require("express");
const app = express();

app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("ORANOS CORE is running ✅");
});

// Chat endpoint
app.post("/chat", async (req, res) => {
  const { message, userId } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  // Pour l’instant, réponse mock
  res.json({
    reply: "Message reçu par ORANOS CORE 🧠",
    received: message,
    userId: userId || null,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ORANOS CORE running on port ${PORT}`);
});
