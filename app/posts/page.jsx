import Link from "next/link";
import React, { Fragment } from "react";

export default async function PostsPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    console.log(posts)
    return (
        <Fragment>
            <h1>Post Page</h1>
            {
                posts.map((post)=>(<div key={post.id}>
                    <Link href={`/posts/${post.id}`}>{post.id} {post.title}</Link>
                </div>))
            }
        </Fragment>
    )
}