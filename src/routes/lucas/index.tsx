import { component$, useContext } from '@builder.io/qwik';
import { CTXContador } from '~/context/contador';

export default component$(() => {
	const contador = useContext(CTXContador);
	return (
		<>
			<h1>Hola page</h1>
			<button onClick$={() => contador.contador++}>ver post</button>
			<p>{contador.contador}</p>
		</>
	);
});
