import {
	component$,
	Slot,
	useContextProvider,
	useStore,
	useStyles$
} from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import styles from './styles.css?inline';
import { CTXContador } from '~/context/contador';

export const useServerTimeLoader = routeLoader$(() => {
	return {
		date: new Date().toISOString()
	};
});

export default component$(() => {
	const contadorData = useStore({ contador: 0 });

	useContextProvider(CTXContador, contadorData);
	useStyles$(styles);
	return (
		<>
			<main>
				<Slot />
			</main>
		</>
	);
});
