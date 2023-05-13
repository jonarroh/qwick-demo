import { createContextId } from '@builder.io/qwik';

export const CTXContador = createContextId<{ contador: number }>(
	'contador'
);
