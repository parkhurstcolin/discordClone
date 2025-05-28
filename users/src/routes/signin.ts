import express from 'express';

const router = express();

router.get('/api/user/signin', (req, res) => {
  res.send('signin');
});

export { router as signinRouter };