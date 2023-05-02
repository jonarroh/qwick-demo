import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { server$ } from '@builder.io/qwik-city';
export interface Posts {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export const Post = component$(() => {
	const postS = useSignal<Posts[]>([]);
	const noPosts = useSignal<number>(5);
	const getPosts = server$(async () => {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/posts'
		);
		const data = await response.json();
		return data;
	});
	useTask$(async () => {
		postS.value = await getPosts();
	});
	return (
		<>
			<div class="flex flex-col items-center justify-center w-screen text-center">
				<h1 class="text-4xl font-bold">Posts</h1>
				<div>
					<button
						class="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
						onClick$={() => {
							noPosts.value = noPosts.value + 5;
						}}>
						Load More
					</button>
					<button
						class="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
						onClick$={() => {
							noPosts.value = noPosts.value - 5;
						}}>
						Load Less
					</button>
				</div>

				{postS.value.slice(1, noPosts.value).map(post => (
					<>
						<div class="text-2xl font-bold text-center" key={post.id}>
							{post.title}
						</div>
						<section class="text-blue-900 body-font">
							{post.body}
						</section>
					</>
				))}
			</div>
		</>
	);
});
