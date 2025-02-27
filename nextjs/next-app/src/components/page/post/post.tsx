const Post = async () => {
	const data = await fetch(`http://localhost:5000/posts`, {
		cache: "no-store",
	});
	const posts = await data.json();
	return (
		<div>
			<h1>This is the Post page</h1>
			{posts.map((post: { title: string; content: string, id: string }) => (
				<div key={post.id}>
					<h1>{post.title}</h1>
					<p>{post.content}</p>
				</div>
			))}
		</div>
	);
};

export default Post;
