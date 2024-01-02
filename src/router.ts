import { Router } from 'express';
import { fileRouter } from './fileHandler/router';

const mainRouter = Router({
	mergeParams: true,
});

mainRouter.use('/', fileRouter)

export { mainRouter };
