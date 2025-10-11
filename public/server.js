// server.js
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { purchaseMessage } from '../scripts/email-purchase.js';

const app = express();

const PORT = process.env.PORT || 5000;

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
})

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, '..')));

// Parse JSON in request body
app.use(bodyParser.json());

// POST route to send purchase email
app.post('/send-purchase-email', async (req, res) => {
  const purchaseData = req.body;

  try {
    const previewUrl = await purchaseMessage(purchaseData);
    res.json({ success: true, previewUrl });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log('✅ Server running at http://0.0.0.0:' + PORT);
});
