import express from 'express';


import { signUpRouter } from './routes/signup';
import { signInRouter } from './routes/signin';
import { signOutRouter } from './routes/signout';

const app = express();

app.use(signUpRouter);
app.use(signInRouter);
app.use(signOutRouter);


app.listen(3000, () => {
  console.log('Listening on 3000');
});
