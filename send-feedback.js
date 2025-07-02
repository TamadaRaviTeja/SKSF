const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Configure multer to store uploaded files in the 'uploads' directory
const upload = multer({ dest: 'uploads/' });

// Serve static files (like CSS/JS) from the root directory (optional: change to a 'static' folder if needed)
app.use(express.static(__dirname));

// Serve index.html from root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'messageform.html'));
});

// Email sending with optional image attachment
app.post('/send-feedback', upload.single('image'), async (req, res) => {
  const { name, mobile, city, message } = req.body;
  const image = req.file;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'raviteja.tamada19189@gmail.com',
      pass: 'mkcq xtxr pzzg garp' // Use Gmail App Password
    }
  });

  const mailOptions = {
    from: 'raviteja.tamada19189@gmail.com',
    to: 'raviteja.tamada19189@gmail.com',
    subject: 'Require Spare Parts',
    text: `Name: ${name}\nMobile: ${mobile}\nCity: ${city}\nMessage: ${message}`,
    attachments: image ? [{
      filename: image.originalname,
      path: image.path
    }] : []
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Message sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send feedback.");
  } finally {
    // Optional: remove uploaded file from server after email is sent
    if (image) {
      fs.unlink(image.path, (err) => {
        if (err) console.error('Failed to delete uploaded image:', err);
      });
    }
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
