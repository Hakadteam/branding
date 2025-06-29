import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zspdsmchyrkadgdjiuyb.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not found. Please add VITE_SUPABASE_ANON_KEY to your .env file.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey || '', {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  db: {
    schema: 'public'
  },
  global: {
    headers: {
      'X-Client-Info': 'hakad-digital-lab-portfolio'
    }
  }
});

// Test connection function
export const testConnection = async () => {
  try {
    const { data, error } = await supabase.from('contacts').select('count', { count: 'exact', head: true });
    if (error) {
      console.error('Supabase connection error:', error);
      return false;
    }
    console.log('✅ Supabase connected successfully');
    return true;
  } catch (err) {
    console.error('❌ Supabase connection failed:', err);
    return false;
  }
};

// Helper functions for common operations
export const contactService = {
  async create(contact: {
    name: string;
    email: string;
    service: string;
    message: string;
  }) {
    const { data, error } = await supabase
      .from('contacts')
      .insert([{
        ...contact,
        status: 'new'
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating contact:', error);
      throw error;
    }
    return data;
  },

  async getAll() {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
    return data || [];
  },

  async updateStatus(id: string, status: string) {
    const { data, error } = await supabase
      .from('contacts')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating contact status:', error);
      throw error;
    }
    return data;
  }
};

export const newsletterService = {
  async subscribe(email: string) {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ 
        email,
        status: 'active',
        subscribed_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) {
      // Handle duplicate email gracefully
      if (error.code === '23505') {
        throw new Error('Email already subscribed to our newsletter');
      }
      console.error('Error subscribing to newsletter:', error);
      throw error;
    }
    return data;
  },

  async getAll() {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .order('subscribed_at', { ascending: false });

    if (error) {
      console.error('Error fetching newsletter subscribers:', error);
      throw error;
    }
    return data || [];
  },

  async unsubscribe(email: string) {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .update({ status: 'unsubscribed' })
      .eq('email', email)
      .select()
      .single();

    if (error) {
      console.error('Error unsubscribing from newsletter:', error);
      throw error;
    }
    return data;
  }
};

export const projectService = {
  async getAll() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
    return data || [];
  },

  async getFeatured() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching featured projects:', error);
      throw error;
    }
    return data || [];
  },

  async getByCategory(category: string) {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching projects by category:', error);
      throw error;
    }
    return data || [];
  },

  async create(project: any) {
    const { data, error } = await supabase
      .from('projects')
      .insert([{
        ...project,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating project:', error);
      throw error;
    }
    return data;
  },

  async update(id: string, updates: any) {
    const { data, error } = await supabase
      .from('projects')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating project:', error);
      throw error;
    }
    return data;
  }
};

export const testimonialService = {
  async getAll() {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching testimonials:', error);
      throw error;
    }
    return data || [];
  },

  async getFeatured() {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching featured testimonials:', error);
      throw error;
    }
    return data || [];
  },

  async create(testimonial: any) {
    const { data, error } = await supabase
      .from('testimonials')
      .insert([{
        ...testimonial,
        created_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating testimonial:', error);
      throw error;
    }
    return data;
  }
};

// Initialize connection test on module load
if (typeof window !== 'undefined') {
  testConnection();
}