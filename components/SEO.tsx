import React, { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description = "Despacho Legal Especializado en Divorcios, Intestados, IMSS y Defensa Administrativa en Guadalajara, Jalisco. Pérez y González Abogados: Resultados legales con enfoque humano.",
    keywords = "abogados guadalajara, divorcios jalisco, intestados gdl, defensa administrativa, asesoría legal imss, perez y gonzalez abogados",
    image = "/og-image.jpg", // Default OG image if exists
    url = window.location.href,
    type = "website"
}) => {
    const fullTitle = title
        ? `${title} | Pérez y González Abogados`
        : "Pérez y González Abogados | Especialistas Legales en Guadalajara";

    useEffect(() => {
        // Update Title
        document.title = fullTitle;

        // Helper to update or create meta tags
        const updateMetaTag = (selector: string, attribute: string, value: string) => {
            let element = document.querySelector(selector);
            if (!element) {
                element = document.createElement('meta');
                if (selector.startsWith('meta[name')) {
                    (element as HTMLMetaElement).setAttribute('name', selector.split('"')[1]);
                } else if (selector.startsWith('meta[property')) {
                    (element as HTMLMetaElement).setAttribute('property', selector.split('"')[1]);
                }
                document.head.appendChild(element);
            }
            element.setAttribute(attribute, value);
        };

        // Standard Meta Tags
        updateMetaTag('meta[name="description"]', 'content', description);
        updateMetaTag('meta[name="keywords"]', 'content', keywords);

        // Open Graph / Facebook
        updateMetaTag('meta[property="og:type"]', 'content', type);
        updateMetaTag('meta[property="og:title"]', 'content', fullTitle);
        updateMetaTag('meta[property="og:description"]', 'content', description);
        updateMetaTag('meta[property="og:image"]', 'content', image);
        updateMetaTag('meta[property="og:url"]', 'content', url);

        // Twitter
        updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
        updateMetaTag('meta[name="twitter:title"]', 'content', fullTitle);
        updateMetaTag('meta[name="twitter:description"]', 'content', description);
        updateMetaTag('meta[name="twitter:image"]', 'content', image);

    }, [fullTitle, description, keywords, image, url, type]);

    return null; // This component doesn't render anything
};

export default SEO;
