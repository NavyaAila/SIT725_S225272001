
const express = require('express');
const app = express();

const port = 3000;
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server is running. Check the /add endpoint!');
});

app.get('/add', (req, res) => {
  let num1 = req.query.num1;
  let num2 = req.query.num2;

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);
  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).json({
      error: 'Invalid input. Please provide valid numbers for num1 and num2 in the query parameters (e.g., /add?num1=10&num2=5).'
    });
  }

  const sum = number1 + number2;

  res.json({
    message: 'Calculation successful',
    operation: 'addition',
    number1: number1,
    number2: number2,
    result: sum
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`Test the addition API at http://localhost:${port}/add?num1=5&num2=7`);
});