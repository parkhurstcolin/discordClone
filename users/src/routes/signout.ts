import express from 'express';

const signOutRouter = express()

signOutRouter.get('/api/user/signout', (req, res) => {});


export { signOutRouter as signOutRouter };