import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getBlogPostBySlug } from '../services/supabase';

// Sample blog data for fallback/demo
const samplePosts = [
  {
    slug: "psychology-behind-gamification",
    title: "The Psychology Behind Gamification in UX Design",
    excerpt: "Explore how game mechanics tap into human psychology to create more engaging digital experiences.",
    date: "2025-05-15",
    author: "AtlasMoth Team",
    featured_image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    body: `<p>Gamification is more than just points and badges. It's about tapping into intrinsic motivation and making digital experiences rewarding and fun. In this article, we explore the core psychological drivers behind gamification and how you can leverage them in UX design...</p><h2>1. Motivation</h2><p>People are motivated by achievement, progress, and recognition. Game mechanics like progress bars, achievements, and leaderboards cater to these needs...</p>`
  },
  // Add more posts as needed
];

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // In production, fetch from Supabase
        // const data = await getBlogPostBySlug(slug);
        // setPost(data);
        const found = samplePosts.find(p => p.slug === slug);
        setTimeout(() => {
          setPost(found || null);
          setLoading(false);
        }, 600);
      } catch (error) {
        setLoading(false);
        setPost(null);
      }
    };
    fetchPost();
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-background">
        <section className="container mx-auto px-6 py-12">
          {loading ? (
            <div className="flex justify-center items-center py-32">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : post ? (
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto bg-surface/60 rounded-2xl shadow-xl p-8 md:p-12 border border-white/10"
            >
              {/* Featured Image */}
              {post.featured_image && (
                <div className="mb-8 rounded-xl overflow-hidden aspect-[16/7]">
                  <img 
                    src={post.featured_image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              {/* Title & Meta */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-xs text-text-secondary mb-8">
                <span>{post.date}</span>
                <span>•</span>
                <span>By {post.author || 'AtlasMoth Team'}</span>
              </div>
              {/* Blog Body (dangerouslySetInnerHTML for demo; use a proper renderer in prod) */}
              <div
                className="prose prose-invert max-w-none text-lg"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
              {/* Animated divider */}
              <motion.div
                className="my-8 h-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1 }}
              />
              {/* Back to Blog */}
              <div className="flex justify-between items-center mt-8">
                <Link to="/blog" className="game-button">
                  ← Back to Blog
                </Link>
                <span className="text-xs text-text-secondary">Share this post</span>
              </div>
            </motion.article>
          ) : (
            <div className="text-center py-32">
              <h2 className="text-2xl font-bold mb-4">Post not found</h2>
              <p className="text-text-secondary mb-6">The blog post you are looking for does not exist or has been removed.</p>
              <Link to="/blog" className="game-button">Go to Blog</Link>
            </div>
          )}
        </section>
        <Footer />
      </main>
    </>
  );
};

export default BlogPost;
