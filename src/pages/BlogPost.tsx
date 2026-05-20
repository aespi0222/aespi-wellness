import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, User, ChevronLeft, Share2, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { BLOG_POSTS } from '../data/blogPosts';
import { RelatedServices } from '../components/RelatedServices';

export function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "publisher": {
      "@type": "WellnessCenter",
      "name": "AESPI Wellness Studio"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.aespi.com.sg/blog/${post.slug}`
    }
  };

  return (
    <div className="pt-20">
      <SEO 
        title={`${post.title} | AESPI Blog`} 
        description={post.excerpt}
        ogType="article"
        ogImage={post.image}
        canonical={`/blog/${post.slug}`}
        additionalSchema={[articleSchema]}
      />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-100">
        <motion.div 
          className="h-full bg-secondary"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <article className="pb-20">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto px-6 mb-10">
          <Link 
            to="/blog" 
            className="flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-primary transition-colors group mb-8 uppercase tracking-widest"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
          </Link>
          
          <div className="flex flex-col items-center text-center">
            <span className="px-4 py-1.5 bg-primary/5 text-[10px] font-bold text-primary uppercase tracking-[0.3em] rounded-full mb-8">
              {post.category}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-10 italic leading-[1.15] tracking-tight text-balance">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                  <User size={12} className="text-slate-400" />
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>{post.readingTime} read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="aspect-[21/9] rounded-[32px] overflow-hidden shadow-xl mb-4">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-slate-400 text-xs font-light text-center">Healthy ageing awareness and muscle health technology for seniors in Singapore.</p>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto px-6">
          {/* Key Takeaways Box (Refined) */}
          <div className="py-8 border-b border-slate-100 mb-10">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
              Key Article Insights
            </h3>
            <div className="grid sm:grid-cols-3 gap-8">
              {(post.insights || [
                "Muscle loss is natural but reversible after age 50.",
                "Protein and resistance training are key pillars.",
                "Non-invasive tech like BIXEPS assists all levels."
              ]).map((insight, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">{i + 1}</span>
                  <p className="text-slate-600 text-xs leading-relaxed italic">{insight}</p>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="prose prose-slate prose-lg md:prose-xl max-w-none 
              prose-headings:font-serif prose-headings:italic prose-headings:text-slate-900 prose-headings:tracking-tight
              prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-6 prose-h2:text-4xl
              prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-2xl prose-h3:border-l-4 prose-h3:border-secondary/20 prose-h3:pl-6
              prose-p:text-slate-600 prose-p:font-light prose-p:leading-[1.75] prose-p:mb-10
              prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline
              prose-li:text-slate-600 prose-li:font-light prose-li:mb-4 prose-li:leading-[1.8]
              prose-strong:text-slate-900 prose-strong:font-bold
              prose-ul:mb-10 prose-ul:list-none prose-ul:pl-0
              [&_ul_li]:relative [&_ul_li]:pl-10 [&_ul_li]:before:content-[''] [&_ul_li]:before:absolute [&_ul_li]:before:left-0 [&_ul_li]:before:top-3 [&_ul_li]:before:w-2.5 [&_ul_li]:before:h-2.5 [&_ul_li]:before:bg-secondary [&_ul_li]:before:rounded-full
              [&_hr]:my-16 [&_hr]:border-slate-100"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Expert Quote Callout */}
          <div className="my-16 pt-16 border-t border-slate-100 text-center relative">
            <p className="text-xl md:text-2xl font-serif text-slate-400 italic leading-relaxed max-w-2xl mx-auto">
              "The goal of healthy ageing isn't just to live longer, but to arrive at the future with your strength and independence intact."
            </p>
          </div>
        </div>
      </article>

      {/* Recommended Reading */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-3xl font-serif text-slate-900 italic mb-2">Continue Reading</h2>
              <p className="text-slate-500 font-light text-sm">Explore more insights from our longevity journal.</p>
            </div>
            <Link to="/blog" className="text-primary font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 group">
              All Articles <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map((p, i) => (
              <Link key={p.id} to={`/blog/${p.slug}`} className="group bg-white p-8 rounded-[32px] border border-slate-100 flex gap-6 hover:shadow-xl transition-all duration-500">
                <div className="hidden sm:block w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div>
                   <span className="text-primary text-[10px] font-bold uppercase tracking-widest block mb-2">{p.category}</span>
                   <h3 className="text-lg font-serif text-slate-900 mb-2 group-hover:text-primary transition-colors italic line-clamp-2">{p.title}</h3>
                   <span className="text-slate-400 text-xs">{p.readingTime} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
