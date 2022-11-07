'use client'
export default function PostError({error}){
    return(
        <>
            <div>Post Error 404</div>
            <p>{error.message}</p>
        </>
    )
}
