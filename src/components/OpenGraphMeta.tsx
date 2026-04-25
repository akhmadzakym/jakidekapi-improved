import React from "react";
import { Helmet } from "react-helmet";

type OpenGraphMetaProps = {
    title: string;
    desc: string;
    url: string;
    image: string;
    siteName?: string;
}

const OpenGraphMeta: React.FC<OpenGraphMetaProps> = ({ title, desc, url, image, siteName }) => {
    return(  
        <Helmet>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />
            {siteName && <meta property="og:site_name" content={siteName} />}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default OpenGraphMeta;