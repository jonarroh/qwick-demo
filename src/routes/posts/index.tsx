import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { server$ } from '@builder.io/qwik-city';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface Post {
	id: string;
	createdAt: Date;
	content: string;
	authorId: string;
	autorName: string;
}

export default component$(() => {
	const post = useSignal<Post[]>([]);

	const connectToDB = server$(async () => {
		const data = await prisma.post.findMany();
		console.log(data);
		return data;
	});

	useTask$(async () => {
		post.value = await connectToDB();
	});

	return (
		<>
			<h1>Hola page</h1>
			<button
				onClick$={() => {
					connectToDB().then(data => {
						post.value = data;
					});
				}}>
				ver post
			</button>

			{post &&
				post.value.map((item, index) => {
					return (
						<div key={index}>
							<h2>{item.autorName}</h2>
							<p>{item.content}</p>
						</div>
					);
				})}
		</>
	);
});
