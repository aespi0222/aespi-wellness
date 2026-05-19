import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { BlogPost } from '../data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-primary uppercase tracking-widest rounded-full shadow-sm">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-8">
          <div className="flex items-center gap-4 mb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readingTime}
            </span>
          </div>
          <h3 className="text-xl font-serif text-slate-900 mb-4 group-hover:text-primary transition-colors line-clamp-2 italic">
            {post.title}
          </h3>
          <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
            Read Article <ChevronRight size={14} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
