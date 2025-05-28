import express from 'express';

const router = express();

router.get('/api/user/signout', (req, res) => {
  res.send('signout');
});

export { router as signoutRouter };