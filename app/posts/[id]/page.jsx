import { Fragment } from "react";

async function wait(timeInNs){
    return new Promise((resolve,_)=>{
        setTimeout(()=>{
            resolve(true)
        }, timeInNs)
    })

}

const getPostById = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
        // {
            // next: { revalidate: 10 },
            // cache: 'no-store'

        // }
    )
    const post = await response.json();
    await wait(2000)
    return post;
}

export default async function PostWithIdPage({ params, searchParams }) {
    const post = await getPostById(params.id)
    return (
        <Fragment>
            <div>Post Id Page</div>
            <pre>{JSON.stringify(post, null, 2)}</pre>
        </Fragment>
    )
}