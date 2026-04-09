const express = require('express');
const app = express();

// 首页
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>欢迎来到 Simple Vercel App</title>
        <style>
          body {
            font-family: "Helvetica Neue", Arial, sans-serif;
            background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
            color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            font-size: 3em;
            margin-bottom: 0.2em;
            color: #2a9d8f;
          }
          p {
            font-size: 1.2em;
            color: #264653;
          }
          a {
            color: #e76f51;
            text-decoration: none;
            margin-top: 20px;
            font-weight: bold;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <h1>欢迎来到 Simple Vercel App</h1>
        <p>这是一个快速部署示例，同时包含 API 测试接口</p>
        <p>尝试访问 <a href="/api/hello">/api/hello</a> 来获取 JSON 响应</p>
      </body>
    </html>
  `);
});

// API 示例
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello World! 这是 API 测试返回的数据。" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
