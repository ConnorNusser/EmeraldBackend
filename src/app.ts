import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is your Express backend with TypeScript!');
});

app.get('/emeralddata', (req: Request, res: Response) => {
    res.send('Send Request');
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
