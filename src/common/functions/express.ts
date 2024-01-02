import { NextFunction, Request, Response } from 'express';
import { ExpressError } from '../classes/error';

export function errorHandler(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	let error: ExpressError;
	if (err instanceof ExpressError) {
		error = err;
	} else {
		console.log(err);
		error = new ExpressError(500, err.message);
	}
	return res.status(error.getStatus).json({
		message: error.message,
		...error.getProps,
	});
}
