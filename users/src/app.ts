import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
// import cookieSession from 'cookie-session';

import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
const app = express();
// app.set('trust proxy', true);
app.use(json());
// app.use(
//   cookieSession({
//     signed: false,
//     secure: true,
//   })
// );

app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);



export { app }