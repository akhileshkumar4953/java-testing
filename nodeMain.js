// nodeMain.js
const http = require("http");
const fs = require("fs");
const url = require("url");
const qs = require("querystring");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  
  if (req.method === "GET" && parsedUrl.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Simple Login Page</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .login-box {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
            width: 300px;
          }
          h2 {
            text-align: center;
            color: #333;
          }
          input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          button {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          button:hover {
            background-color: #45a049;
          }
        </style>
      </head>
      <body>
        <div class="login-box">
          <h2>Login</h2>
          <form method="POST" action="/login">
            <input type="text" name="username" placeholder="Username" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <button type="submit">Login</button>
          </form>
        </div>
      </body>
      </html>
    `);
  } 
  else if (req.method === "POST" && parsedUrl.pathname === "/login") {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      const data = qs.parse(body);
      const { username, password } = data;

      res.writeHead(200, { "Content-Type": "text/html" });
      if (username === "admin" && password === "1234") {
        res.end(`<h2 style="text-align:center;color:green;">✅ Login Successful! Welcome ${username}</h2>`);
      } else {
        res.end(`<h2 style="text-align:center;color:red;">❌ Invalid Credentials</h2>
                 <div style="text-align:center;"><a href="/">Try Again</a></div>`);
      }
    });
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h2>404 Not Found</h2>");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
