import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogPosts, Post } from '../notion';
import SEO from '../components/SEO';

const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogPosts().then((data) => {
            setPosts(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <SEO
                title="Blog Jurídico"
                description="Biblioteca legal con artículos, guías y consejos sobre divorcios, herencias y trámites legales en Jalisco. Manténgase informado con Pérez y González Abogados."
            />
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 playfair-display text-gold tracking-tight">Nuestro blog</h1>
                <p className="text-gray-400 max-w-2xl mx-auto font-sans">Noticias, actualizaciones legales y guías para proteger tu patrimonio y tranquilidad.</p>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 space-y-4">
                    <div className="w-12 h-12 border-4 border-gold/20 border-t-gold rounded-full animate-spin"></div>
                    <p className="text-gray-500 font-sans tracking-widest text-xs uppercase">Cargando blog...</p>
                </div>
            ) : posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.id} className="bg-charcoal border border-white/5 flex flex-col hover:border-gold/30 transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            {post.coverImage && (
                                <div className="w-full h-48 overflow-hidden">
                                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            )}
                            <div className="p-8 flex flex-col flex-grow">
                                <span className="text-gold text-[10px] font-bold mb-4 tracking-[0.3em] uppercase relative z-10 block">{post.date ? new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Reciente'}</span>
                                <h2 className="text-2xl font-bold mb-4 playfair-display text-white line-clamp-2 leading-[1.3] relative z-10">
                                    <Link to={`/blog/${post.slug}`} className="hover:text-gold transition-colors block">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-400 mb-8 flex-grow line-clamp-3 font-sans leading-relaxed relative z-10">{post.excerpt}</p>
                                <Link to={`/blog/${post.slug}`} className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] hover:text-white transition-all duration-300 group flex items-center relative z-10 w-fit">
                                    Leer Artículo
                                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform">&rarr;</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 border border-white/5 bg-charcoal/30">
                    <p className="text-gray-500 font-serif italic text-xl">Aún no hay artículos publicados.</p>
                </div>
            )}
        </div>
    );
};

export default Blog;
