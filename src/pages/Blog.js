import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getBlogPosts } from '../services/supabase';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null);
  const [newsletterLoading, setNewsletterLoading] = useState(false);

  // Sample blog post data (will be replaced with actual data from Supabase)
  const samplePosts = [
    {
      id: 1,
      title: "The Psychology Behind Gamification in UX Design",
      slug: "psychology-behind-gamification",
      excerpt: "Explore how game mechanics tap into human psychology to create more engaging digital experiences.",
      category: "UX Design",
      created_at: "2025-05-15",
      reading_time: "6 min",
      featured_image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Categories extracted from blog posts
  const categories = ['all', ...new Set(samplePosts.map(post => post.category))];

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // In production, this would fetch real data from Supabase
        // const fetchedPosts = await getBlogPosts();
        // setPosts(fetchedPosts);
        
        // Using sample data for now
        setTimeout(() => {
          setPosts(samplePosts);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      }
    };

    fetchBlogPosts();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Filter posts by category
  const filteredPosts = currentCategory === 'all' 
    ? posts
    : posts.filter(post => post.category === currentCategory);

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-background">
        <section className="container mx-auto px-6 py-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block mb-3 bg-primary/20 text-primary px-4 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="font-display text-xs">KNOWLEDGE GEMS</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 ">AtlasMoth Blog</h1>
            <p className="text-text-secondary max-w-xl mx-auto">
              Discover insights, tutorials, and case studies about gamification, design, and engineering.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setCurrentCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-surface/50 text-text-secondary hover:bg-surface'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-text-secondary text-lg">No posts found in this category.</p>
                </div>
              )}
            </>
          )}
        </section>
        <Footer />
      </main>
    </>
  );
};

// BlogCard Component
const BlogCard = ({ post, index }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-surface/50 rounded-xl overflow-hidden h-full flex flex-col border border-white/10"
    >
      {/* Featured Image */}
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={post.featured_image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Category & Date */}
        <div className="flex justify-between items-center mb-3">
          <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
            {post.category}
          </span>
          <span className="text-text-secondary text-xs">{post.created_at}</span>
        </div>
        
        {/* Title & Excerpt */}
        <Link to={`/blog/${post.slug}`} className="group">
          <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-text-secondary text-sm line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        </Link>
        
        {/* Read More & Reading Time */}
        <div className="mt-auto flex items-center justify-between">
          <Link 
            to={`/blog/${post.slug}`} 
            className="text-primary text-sm font-medium hover:underline flex items-center"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          <span className="text-xs text-text-secondary">
            {post.reading_time} read
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default Blog;
