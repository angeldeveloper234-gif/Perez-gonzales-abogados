import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { fetchPostBySlug, Post } from '../notion';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            console.log('BlogPost rendering for slug:', slug);
            setLoading(true);
            fetchPostBySlug(slug).then((data) => {
                setPost(data);
                setLoading(false);
            });
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen animate-pulse">
                <div className="h-4 w-24 bg-gold/10 mb-12 rounded"></div>
                <div className="h-6 w-32 bg-gold/10 mb-8 rounded"></div>
                <div className="h-20 w-full bg-white/5 mb-8 rounded"></div>
                <div className="space-y-4">
                    <div className="h-4 w-full bg-white/5 rounded"></div>
                    <div className="h-4 w-full bg-white/5 rounded"></div>
                    <div className="h-4 w-3/4 bg-white/5 rounded"></div>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen text-center">
                <h1 className="text-4xl font-bold playfair-display text-white mb-8">Artículo no encontrado</h1>
                <Link to="/blog" className="text-gold uppercase tracking-widest text-xs font-bold hover:text-white transition-colors underline decoration-gold/30 underline-offset-8">
                    Volver a la biblioteca legal
                </Link>
            </div>
        );
    }

    return (
        <article className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
            <Link to="/blog" className="text-gold hover:text-white transition-colors mb-16 inline-flex items-center text-[10px] tracking-[0.3em] uppercase group">
                <span className="mr-3 transform group-hover:-translate-x-2 transition-transform">&larr;</span> Regresar al blog
            </Link>

            <header className="mb-16 border-b border-white/5 pb-10">
                <div className="text-gold text-[10px] font-bold mb-6 tracking-[0.4em] uppercase">
                    {post.date ? new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Reciente'}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 playfair-display text-white leading-[1.15] tracking-tight">
                    {post.title}
                </h1>

                {post.coverImage && (
                    <div className="w-full h-[400px] mb-12 overflow-hidden border border-white/5">
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                )}

                <div className="flex items-center space-x-6 p-4 border border-white/5 bg-charcoal/20 w-fit">
                    <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center bg-obsidian">
                        <span className="text-gold font-bold text-sm tracking-tighter">P&G</span>
                    </div>
                    <div>
                        <p className="text-white font-bold text-xs tracking-widest uppercase">Expertos Legales</p>
                        <p className="text-[10px] text-gray-500 tracking-wider">Despacho Jurídico Especializado</p>
                    </div>
                </div>
            </header>

            <div className="prose prose-invert prose-gold max-w-none text-gray-400 leading-[1.8] text-lg font-sans">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        p: ({ node, ...props }) => <p className="mb-8" {...props} />,
                        h1: ({ node, ...props }) => <h1 className="text-4xl font-bold text-white playfair-display mb-10 mt-16" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-3xl font-bold text-white playfair-display mb-8 mt-14" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="text-2xl font-bold text-gold playfair-display mb-6 mt-12" {...props} />,
                        ul: ({ node, ...props }) => <ul className="list-disc pl-8 mb-8 space-y-3" {...props} />,
                        ol: ({ node, ...props }) => <ol className="list-decimal pl-8 mb-8 space-y-3" {...props} />,
                        li: ({ node, ...props }) => <li className="text-gray-400" {...props} />,
                        blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gold pl-8 py-4 my-10 italic bg-gold/5 text-gray-300 text-xl" {...props} />,
                        img: ({ node, ...props }) => (
                            <figure className="my-14 bg-charcoal/30 border border-white/5 p-2 rounded-sm">
                                <img className="w-full h-auto object-cover" {...props} alt={props.alt || 'Imagen del post'} />
                                {props.alt && <figcaption className="text-center text-xs text-gray-500 mt-4 tracking-widest uppercase font-sans">{props.alt}</figcaption>}
                            </figure>
                        ),
                        hr: ({ node, ...props }) => <hr className="border-white/10 my-16" {...props} />,
                        a: ({ node, ...props }) => <a className="text-gold underline hover:text-white transition-colors" {...props} />
                    }}
                >
                    {post.content || ''}
                </ReactMarkdown>
            </div>

            <div className="p-10 border border-gold/20 bg-gold/5 rounded-sm mt-20 text-center relative overflow-hidden group">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <p className="text-2xl playfair-display text-white mb-4 italic">¿Necesita asesoría personalizada?</p>
                <p className="text-gray-400 text-sm mb-8 font-sans max-w-xl mx-auto uppercase tracking-wider">En nuestro despacho diseñamos una estrategia legal para proteger su patrimonio y el bienestar de su familia.</p>
                <a href="/#contact" className="inline-block px-12 py-4 bg-gold text-obsidian uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-white transition-all duration-500 hover:tracking-[0.3em]">
                    Contáctenos Ahora
                </a>
            </div>
        </article>
    );
};

export default BlogPost;
