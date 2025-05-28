import express from 'express';

const router = express();

router.get('/api/user/signup', (req, res) => {
  res.send('SignUp');
});

export { router as signupRouter };