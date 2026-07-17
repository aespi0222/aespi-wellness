import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { BlogCard } from '../components/BlogCard';
import { BLOG_POSTS } from '../data/blogPosts';

export function Blog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AESPI Healthy Ageing & Wellness Blog",
    "description": "Insights, research, and tips on healthy ageing, muscle resilience, and cellular recovery from the AESPI Wellness Studio team.",
    "publisher": {
      "@type": "WellnessCenter",
      "name": "AESPI Wellness Studio"
    },
    "blogPost": BLOG_POSTS.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `https://www.aespi.com.sg/blog/${post.slug}`
    }))
  };

  return (
    <div className="pt-32 pb-20">
      <SEO 
        title="Healthy Ageing & Wellness Blog | Insights for Seniors | AESPI" 
        description="Explore articles on sarcopenia prevention, molecular hydrogen research, and holistic longevity strategies from Singapore's premier wellness studio."
        canonical="/blog"
        additionalSchema={[blogSchema]}
      />

      {/* Hero */}
      <section className="bg-surface py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">
              Knowledge Repository
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 italic">
              Insights for a <br /> <span className="text-secondary">Resilient Future.</span>
            </h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              Discover the science behind our technologies and expert advice on navigating the journey of healthy ageing in Singapore.
            </p>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {BLOG_POSTS.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 italic">Stay Informed on Longevity</h2>
          <p className="text-white text-lg font-light mb-10 max-w-2xl mx-auto">
            Get the latest research on muscle activation and cellular health delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/30 text-white placeholder:text-white/50 outline-none focus:border-primary transition-colors"
            />
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
