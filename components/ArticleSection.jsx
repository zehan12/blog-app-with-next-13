import Articles  from "../components/Articles"
const ArticleSection = ( ) => {
    return (
        <section className="lg:my-12 lg:mt-24 m-6">
          <div className="mx-24">
        {/* <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap categories">
            <div className="lg:w-2/3 w-full">
              <div>
                <div className="flex flex-wrap text-gray-900 mb-6">
                  <h3 className="text-2xl font-semibold">Most Recent</h3>
                </div> */}
                <Articles />
              {/* </div>
            </div> */}


{/* 
            <div className="lg:w-1/3 w-full px-4">
              <div>
                <div className="flex flex-wrap text-gray-900 mb-6">
                  <h3 className="text-2xl font-semibold">Popular</h3>
                </div>

                {
                  [1, 2, 3, 4, 5, 6, 7].map((ele) => (<div className="mb-10">
                    <div className="flex">
                      <div className="w-1/3 lg:text-center">
                        <span className="text-3xl font-light text-gray-300">01</span>
                      </div>
                      <div className="w-full text-gray-400">
                        <h3 className="text-normal font-semibold leading-tight text-gray-900"> <a href="single-post.html"> How Health Apps Let with Apple </a> </h3>
                        <div className="inner-info text-sm text-gray-700 mt-1">
                          <span className="item-created-on">14 Jan, 2019</span> -
                          <span className="item-read-time">5 Min Read</span>
                        </div>
                      </div>
                    </div>
                  </div>))
                }
              </div>
            </div> */}


{/* 
          </div>
        </div> */}
        </div>
      </section>
    )
}

export default ArticleSection;