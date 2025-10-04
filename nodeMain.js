// nodeMain.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the login page (HTML + CSS in one file)
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Stylish Login Page</title>
      <style>
        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          height: 100vh;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-box {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
          width: 350px;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .login-box h2 {
          margin-bottom: 25px;
          color: #333;
          font-weight: 700;
        }

        .input-field {
          margin-bottom: 20px;
          text-align: left;
        }

        label {
          display: block;
          font-weight: 600;
          margin-bottom: 8px;
        }

        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 10px;
          font-size: 15px;
          outline: none;
          transition: 0.3s;
        }

        input:focus {
          border-color: #667eea;
          box-shadow: 0 0 5px rgba(102,126,234,0.4);
        }

        button {
          width: 100%;
          padding: 12px;
          border: none;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          font-size: 16px;
          font-weight: 600;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background: linear-gradient(135deg, #764ba2, #667eea);
        }

        .message {
          margin-top: 20px;
          font-size: 16px;
          font-weight: 500;
        }

      </style>
    </head>
    <body>
      <div class="login-box">
        <h2>🌟 Welcome Back 🌟</h2>
        <form action="/login" method="POST">
          <div class="input-field">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required placeholder="Enter username" />
          </div>
          <div class="input-field">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required placeholder="Enter password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </body>
    </html>
  `);
});

// Handle login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.send(`
      <h2 style="color:green;text-align:center;margin-top:100px;">✅ Welcome, ${username}! 🎉</h2>
      <div style="text-align:center;">
        <a href="/" style="color:#667eea;text-decoration:none;font-size:18px;">Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <h2 style="color:red;text-align:center;margin-top:100px;">❌ Invalid Credentials</h2>
      <div style="text-align:center;">
        <a href="/" style="color:#667eea;text-decoration:none;font-size:18px;">Try Again</a>
      </div>
    `);
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
