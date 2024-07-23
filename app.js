const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>DevOps Training Web App</h1>
    <p>This is a simple web application for demonstrating CI/CD implementation.</p>
    <p>Project components:</p>
    <ul>
      <li>JavaScript (Node.js & Express)</li>
      <li>Jenkins</li>
      <li>Docker</li>
      <li>AWS</li>
    </ul>
  `);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});