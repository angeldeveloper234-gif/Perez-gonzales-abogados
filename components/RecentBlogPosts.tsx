import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogPosts, Post } from '../notion';

const RecentBlogPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogPosts().then((data) => {
            setPosts(data.slice(0, 3));
            setLoading(false);
        });
    }, []);

    return (
        <section className="py-24 bg-obsidian border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
                    <div className="mb-8 md:mb-0">
                        <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Actualidad</span>
                        <h2 className="text-4xl md:text-5xl font-bold playfair-display text-white mb-4">Nuestro blog</h2>
                        <p className="text-gray-400 max-w-2xl font-sans text-sm tracking-wide">Manténgase informado con nuestros últimos artículos y análisis sobre temas legales relevantes en Jalisco.</p>
                    </div>
                    <Link to="/blog" className="hidden md:inline-block px-8 py-3 bg-transparent border border-gold/50 text-gold hover:bg-gold hover:text-black transition-all duration-500 font-sans tracking-[0.2em] text-[10px] uppercase">
                        Ver Todos los Artículos
                    </Link>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="bg-charcoal/50 h-[300px] border border-white/5 animate-pulse"></div>
                        ))}
                    </div>
                ) : posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article key={post.id} className="bg-charcoal border border-white/10 flex flex-col hover:border-gold/50 transition-colors duration-300 group overflow-hidden">
                                {post.coverImage && (
                                    <div className="w-full h-48 overflow-hidden">
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                                <div className="p-8 flex flex-col flex-grow">
                                    <span className="text-gold tracking-[0.2em] text-[10px] font-bold mb-4 uppercase">
                                        {post.date ? new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Reciente'}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-4 playfair-display text-white line-clamp-2">
                                        <Link to={`/blog/${post.slug}`} className="hover:text-gold transition-colors">
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-400 mb-8 flex-grow line-clamp-3 font-sans leading-relaxed text-sm">{post.excerpt}</p>
                                    <Link to={`/blog/${post.slug}`} className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] hover:text-white transition-colors flex items-center group/btn">
                                        Leer Artículo
                                        <span className="ml-2 transform group-hover/btn:translate-x-2 transition-transform">&rarr;</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-gray-500 italic font-serif">Aún no hay publicaciones recientes.</p>
                    </div>
                )}

                <div className="mt-12 text-center md:hidden">
                    <Link to="/blog" className="inline-block px-8 py-4 bg-transparent border border-gold/50 text-gold hover:bg-gold hover:text-black transition-all duration-500 font-sans tracking-[0.2em] text-[10px] uppercase w-full">
                        Ver Todos los Artículos
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RecentBlogPosts;
