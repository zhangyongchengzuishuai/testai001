const express = require('express');
const app = express();

// 首页
app.get('/', (req, res) => {
  res.send('<h1>Hello from Vercel!</h1><p>这是一个快速部署示例</p>');
});

// API 示例
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello World!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
