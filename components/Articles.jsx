"Use Client"
const Articles = () => {

    return (
        <>

            {
                [1, 2, 3, 4, 5].map((article, i) => (<div key={i} className="flex flex-wrap most-recent-item pr-5 mb-10">

                    <div className="sm:w-2/3 w-full">
                        <div className="most-recent-item-info">
                            <div className="catg">
                                <span className="text-xs text-gray-500 uppercase">Tags dummy </span>
                            </div>
                            <h2 className="text-normal font-semibold text-gray-900 leading-tight mb-3 mt-1"><a href="single-post.html">Home Internet Is Becoming a Luxury for the Wealthy</a></h2>
                            <p className="text-gray-600 text-sm">And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.</p>
                            <div className="inner-info text-sm text-gray-700 mt-1">
                                <span className="item-created-on">14 Jan, 2019</span> -
                                <span className="item-read-time">5 Min Read</span>
                            </div>
                        </div>
                    </div>

                    {/* <div className="sm:w-1/3 w-full sm:h-auto h-64 sm:mt-0 mt-3 bg-gray-100 bg-cover rounded overflow-hidden"> */}

                        <img className="w-1/3 h-80" src="https://picsum.photos/seed/picsum/200/300" />

                    {/* </div> */}

                </div>))
            }
        </>
    )
}

export default Articles;