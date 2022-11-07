import Link from "next/link";
import React, { Fragment } from "react";
import { notFound } from "next/navigation";
import styles from './page.module.css'


async function wait(timeInNs){
    return new Promise((resolve,_)=>{
        setTimeout(()=>{
            resolve(true)
        }, timeInNs)
    })

}

export default async function PostsPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    await wait(1000)
    const posts = await response.json()

    if ( posts === undefined ) {
        throw new Error("Something Went Wrong")
    }

    if ( posts.length === 0  ) {
        notFound();
    }



    return (
        <Fragment>
            <h1 className={styles.h2}>Post Page</h1>
            {
                posts.map((post)=>(<div key={post.id}>
                    <Link href={`/posts/${post.id}`}>{post.id} {post.title}</Link>
                </div>))
            }
        </Fragment>
    )
}