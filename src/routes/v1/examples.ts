/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * @Author mgarciareimers
 * @Date TODO
 * 
 * @Description Example routes.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*/

import Router from 'express';

import controller from '../../controllers/example';

const router = Router();

// POST requests.

// PUT requests.

// GET requests.
router.get('/', [], controller.getExample);

// DELETE requests.

export default router;