// per default is a server component
export default async function TodoPage() {
    const allPosts = await fetch('https://jsonplaceholder.typicode.com/posts', {
    })
                        .then((response) => response.json())
    console.log(allPosts)
    return (
        <div>
            <h1>Todos Page</h1>
            <ul>
                {allPosts.map(post => {
                    return <li>{post.id} {post.title} {post.userId} </li>
                })}
            </ul>
        </div>
    )
}