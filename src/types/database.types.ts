export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string;
          name: string;
          email: string;
          service: string;
          message: string;
          status: 'new' | 'in_progress' | 'completed' | 'archived';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          service: string;
          message: string;
          status?: 'new' | 'in_progress' | 'completed' | 'archived';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          service?: string;
          message?: string;
          status?: 'new' | 'in_progress' | 'completed' | 'archived';
          created_at?: string;
          updated_at?: string;
        };
      };
      newsletter_subscribers: {
        Row: {
          id: string;
          email: string;
          subscribed_at: string;
          status: 'active' | 'unsubscribed';
        };
        Insert: {
          id?: string;
          email: string;
          subscribed_at?: string;
          status?: 'active' | 'unsubscribed';
        };
        Update: {
          id?: string;
          email?: string;
          subscribed_at?: string;
          status?: 'active' | 'unsubscribed';
        };
      };
      projects: {
        Row: {
          id: string;
          title: string;
          description: string;
          category: 'ui-ux' | 'funnel' | 'website';
          client: string;
          duration: string;
          image_url: string | null;
          live_url: string | null;
          github_url: string | null;
          technologies: any;
          metrics: any;
          featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          category: 'ui-ux' | 'funnel' | 'website';
          client: string;
          duration: string;
          image_url?: string | null;
          live_url?: string | null;
          github_url?: string | null;
          technologies?: any;
          metrics?: any;
          featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          category?: 'ui-ux' | 'funnel' | 'website';
          client?: string;
          duration?: string;
          image_url?: string | null;
          live_url?: string | null;
          github_url?: string | null;
          technologies?: any;
          metrics?: any;
          featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      testimonials: {
        Row: {
          id: string;
          name: string;
          role: string;
          company: string;
          content: string;
          avatar_url: string | null;
          rating: number;
          featured: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          role: string;
          company: string;
          content: string;
          avatar_url?: string | null;
          rating?: number;
          featured?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          role?: string;
          company?: string;
          content?: string;
          avatar_url?: string | null;
          rating?: number;
          featured?: boolean;
          created_at?: string;
        };
      };
    };
  };
}