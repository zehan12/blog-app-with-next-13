import Link from "next/link";
import { Fragment } from "react"
import { BASE_URL } from "../../utils/constant"

const getArticle = async (  ) => {
    const res = await fetch(BASE_URL+"/article");
    return await res.json()
}

const ArticlePage = async ( ) => {
    const articles = await getArticle()
    return (
        <Fragment>
            <h1>Article Page</h1>
            {
                articles &&
                articles.map((article)=>(
                    <div key={article.id}>
                        <Link href={`article/${article.slug}`}>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                        </Link>
                    </div>
                ))
            }
        </Fragment>
    )
}

export default ArticlePage;