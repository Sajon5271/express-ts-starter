import dotenv from 'dotenv';
import express from 'express';
import { userRouter } from './routes/user';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/test', (req, res) => {
  console.log(req.body);
  res.send('Hello');
});

app.use('/user', userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.info('Server started successfully on port: ' + port);
});
