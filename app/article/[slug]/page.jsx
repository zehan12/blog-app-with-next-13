import { Fragment } from "react";
import { BASE_URL } from "../../../utils/constant"

async function wait(timeInNs){
    return new Promise((resolve,_)=>{
        setTimeout(()=>{
            resolve(true)
        }, timeInNs)
    })

}

const getArticleBySlug = async (slug) => {
    const response = await fetch(`${BASE_URL}/article/${slug}`, 
        // {
            // next: { revalidate: 10 },
            // cache: 'no-store'

        // }
    )
    const article = await response.json();
    await wait(2000)
    return article;
}

export default async function ArticleWithSlugPage({ params, searchParams }) {
    console.log(params)
    const article = await getArticleBySlug(params.slug)
    return (
        <Fragment>
            <div>Article Slug Page</div>
            <pre>{JSON.stringify(article, null, 2)}</pre>
            
        </Fragment>
    )
}