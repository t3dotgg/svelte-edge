import type { RequestHandler } from './__types';

export const get: RequestHandler = async () => {
	return {
		body: {
			message: 'test message'
		}
	};
};
