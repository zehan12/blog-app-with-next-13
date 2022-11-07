
export default function PostsLayout(props) {
    return (
            <div>
                PostsLayout
                <ul>
                    <li>some link</li>
                    <li>link 2</li>
                </ul>
            <div>
            </div>
                {props.children}
            </div>
    )
}