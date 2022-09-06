import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MetaDecorator } from "../MetaDecorator";

const images = [
    'https://wallpaperaccess.com/full/3567970.jpg',
    'https://external-preview.redd.it/ad5TBwGIhvfi2j_wCrao1giqZS90uKp4lZ7iTBrxC70.jpg?auto=webp&s=04066b9ec1480198969ed50ddb721ac41a3b75dc',
    'https://images7.alphacoders.com/493/493639.jpg',
    'https://www.teahub.io/photos/full/8-86540_dark-souls-12160-src-vertical-dark-souls-wallpapers.jpg',
    'https://images3.alphacoders.com/669/669303.png',
];

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

    return (
        <>
            <MetaDecorator 
                title={`Post ${id}`}
                description={post?.body}
                image={images[id - 1]}
            />
            <code>
                <pre>
                    {!post ? (<b>Loading...</b>) : JSON.stringify(post, null, 2)}
                </pre>
            </code>
        </>
    )
};