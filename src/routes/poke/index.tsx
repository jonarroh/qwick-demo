import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
	const id = useSignal(1);

	return (
		<>
			<main class="w-screen h-screen flex flex-col items-center justify-center">
				<h2>Buscador simple</h2>
				<span class="text-4xl ">{id}</span>
			</main>
		</>
	);
});
