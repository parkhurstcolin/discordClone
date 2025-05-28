import express from 'express';

const signInRouter = express()

signInRouter.get('/api/user/signin', (req, res) => {});

export { signInRouter as signInRouter };