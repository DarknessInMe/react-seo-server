import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Post = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    const getPosts = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(json => setPost(json))
    };

    useEffect(() => {
        getPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if (!post) return <b>Loading...</b>

    return (
        <code>
            <pre>
                {JSON.stringify(post, null, 2)}
            </pre>
        </code>
    )
};