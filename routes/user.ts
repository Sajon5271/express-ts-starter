import { Router } from 'express';
const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.send('Hello user');
});

userRouter.post('/', (req, res) => {
  res.send('You posted');
});

export { userRouter };
