import { Helmet } from 'react-helmet';

export const MetaDecorator = ({ title, description, image }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />
            <meta name="og:image" content={image} />
            <meta name="og:image:secure_url" content={image} />
        </Helmet>
    )
};