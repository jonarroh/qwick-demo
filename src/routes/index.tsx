import { component$, useSignal } from '@builder.io/qwik';
import { server$, type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
	const contador = useSignal<number>(0);
	const mesage = useSignal<string>('');

	const getMesage = server$(async () => {
		const response = await fetch('http://localhost:5173/api');
		const data = await response.json();
		return data.message;
	});

	return (
		<>
			<div
				class={
					'flex flex-col items-center justify-center w-screen text-center'
				}>
				<h1 class={'text-4xl font-bold'}>Todo App</h1>

				<button
					onClick$={() => {
						if (contador.value > 0) {
							contador.value--;
						}
					}}>
					-
				</button>
				{mesage.value}
				<button
					onClick$={() => {
						getMesage().then(data => {
							mesage.value = data;
						});
					}}>
					mensaje
				</button>
				<button
					onClick$={() => {
						contador.value += Math.floor(Math.random() * 10);
					}}>
					random
				</button>
				<button onClick$={() => contador.value++}>+</button>
				<div class={'text-2xl font-bold text-center'}>{contador}</div>
			</div>
		</>
	);
});

export const head: DocumentHead = {
	title: 'Todo App',
	meta: [
		{
			name: 'description',
			content: 'Todo App written in Qwik'
		}
	]
};
