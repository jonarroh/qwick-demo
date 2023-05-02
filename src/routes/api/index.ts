import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async req => {
	req.json(200, { message: 'Hola mundo!' });
};
