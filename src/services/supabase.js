import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client only if valid env vars are set
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

let supabase = null;
if (supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http')) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('[AtlasMoth] Supabase env variables are not set. Using local/demo mode.');
}

// Blog post functions (safe fallback for demo)
export const getBlogPosts = async () => {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
  return data;
};

export const getBlogPostBySlug = async (slug) => {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();
  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
  return data;
};

// Create a new blog post
export const createBlogPost = async (post) => {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('blogs')
    .insert([post]);
  if (error) {
    console.error('Error creating blog post:', error);
    return null;
  }
  return data;
};

// Update an existing blog post
export const updateBlogPost = async (id, updates) => {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('blogs')
    .update(updates)
    .eq('id', id);
  if (error) {
    console.error('Error updating blog post:', error);
    return null;
  }
  return data;
};

// Delete a blog post
export const deleteBlogPost = async (id) => {
  if (!supabase) return false;
  const { error } = await supabase
    .from('blogs')
    .delete()
    .eq('id', id);
  if (error) {
    console.error('Error deleting blog post:', error);
    return false;
  }
  return true;
};

export { supabase };

