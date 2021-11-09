/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * @Author mgarciareimers
 * @Date 15/03/2021
 * 
 * @Description V1 routes main script.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*/

import Router from 'express';

import examples from './examples';

const router = Router();

// Define routes.
router.use('/examples', examples);

export default router;