import { Fragment } from "react";

export default function PostsLayout({childern}) {
    return (
        <Fragment>
            <div>
                PostsLayout
                <ul>
                    <li>some link</li>
                    <li>link 2</li>
                </ul>
                <div>
                    {childern}
                </div>
            </div>
        </Fragment>
    )
}