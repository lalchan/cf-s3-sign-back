import { Router } from 'express';
import * as FileHandlerController from './controller';

const fileRouter = Router({
	mergeParams: true,
});

fileRouter.use(FileHandlerController.get())

export { fileRouter };
