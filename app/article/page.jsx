import Link from "next/link";
import { Fragment } from "react"
import { BASE_URL } from "../../utils/constant"
import ArticleSection from "../../components/ArticleSection";
import Hero from "../../components/Hero";

const getArticle = async () => {
    const res = await fetch(BASE_URL + "/article");
    const data = await res.json()
    return data.articles
}

const ArticlePage = async () => {
    const articles = await getArticle()
    return (
        <Fragment>
            <Hero />
            <h1>Article Page</h1>
            <ArticleSection />
            <div className="m-40">
            {
                articles &&
                articles.map((article) => (
                    // <div key={article.id}>
                    <Link href={`article/${article.slug}`}>
                        {/* <h3>{article.title}</h3>
                            <p>{article.content}</p> */}
                        <ArticleCard title={article.title} content={article.content} tags={article.tagList} slug={article.slug} />
                        {/* <EachArticle /> */}
                    </Link>
                    // </div>
                ))
            }
            </div>
        </Fragment>
    )
}

export default ArticlePage;



const ArticleCard = ({title, content, tags}) => {
    console.log(title.length)
    return (
    <article class="rounded-xl bg-white p-6 sm:p-8">
        <div class="flex items-start">
          <div
            class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
            aria-hidden="true"
          >
            {/* <div class="flex items-center gap-1">
              <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
              <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
              <span class="h-4 w-0.5 rounded-full bg-indigo-500"></span>
              <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
              <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span> */}
            {/* </div> */}
          </div>
      
          <div class="sm:ml-8">
           {
            tags?.map((tag)=>(
                <strong
                class="rounded border mr-3 border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
              >
                {tag}
              </strong>
        
            ))
           }
          
            <h3 class="mt-4 text-xl font-medium sm:text-xl">
              <a href="" class="hover:underline"> {title.slice(0,100)+"..."} </a>
            </h3>
      
            <p class="mt-1 text-sm text-gray-700">
             {content}
            </p>
      
            <div class="mt-4 sm:flex sm:items-center sm:gap-2">
              <div class="flex items-center text-gray-500">
                <svg
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <p class="ml-1 text-xs font-medium">48:32 minutes</p>
              </div>
      
              <span class="hidden sm:block" aria-hidden="true">&middot;</span>
      
              <p class="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                Featuring <a href="" class="underline hover:text-gray-700">Barry</a>,
                <a href="" class="underline hover:text-gray-700">Sandra</a> and
                <a href="" class="underline hover:text-gray-700">August</a>
              </p>
            </div>
          </div>
        </div>
      </article>
      

    )
}


const EachArticle = ({ date, tags, title, description, content }) => {
    return (
        <div className="dark:bg-white-800 dark:text-black-100 p-2">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-purple-300">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a>
                </div>
                <div className="mt-3">
                    <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Nos creasse pendere crescit angelos etc</a>
                    <p className="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
                </div>
            </div>
        </div>
    )
}