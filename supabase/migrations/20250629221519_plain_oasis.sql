/*
  # Portfolio Website Database Schema

  1. New Tables
    - `contacts` - Contact form submissions
    - `newsletter_subscribers` - Email newsletter subscriptions  
    - `projects` - Portfolio projects showcase
    - `testimonials` - Client testimonials and reviews

  2. Security
    - Enable RLS on all tables
    - Add policies for public access where appropriate
    - Admin-only access for sensitive operations

  3. Features
    - UUID primary keys for all tables
    - Timestamps for audit trails
    - Status tracking for contacts
    - Featured flags for projects and testimonials
    - JSON fields for flexible data storage
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create update_updated_at_column function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'completed', 'archived')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  status text DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed'))
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL CHECK (category IN ('ui-ux', 'funnel', 'website')),
  client text NOT NULL,
  duration text NOT NULL,
  image_url text,
  live_url text,
  github_url text,
  technologies jsonb DEFAULT '[]',
  metrics jsonb DEFAULT '[]',
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  role text NOT NULL,
  company text NOT NULL,
  content text NOT NULL,
  avatar_url text,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies for contacts
CREATE POLICY "Anyone can insert contacts" ON contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin can manage contacts" ON contacts
  FOR ALL USING ((jwt() ->> 'role') = 'admin');

-- Create policies for newsletter_subscribers
CREATE POLICY "Anyone can subscribe to newsletter" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin can manage newsletter subscribers" ON newsletter_subscribers
  FOR ALL USING ((jwt() ->> 'role') = 'admin');

-- Create policies for projects
CREATE POLICY "Anyone can view projects" ON projects
  FOR SELECT USING (true);

CREATE POLICY "Admin can manage projects" ON projects
  FOR ALL USING ((jwt() ->> 'role') = 'admin');

-- Create policies for testimonials
CREATE POLICY "Anyone can view testimonials" ON testimonials
  FOR SELECT USING (true);

CREATE POLICY "Admin can manage testimonials" ON testimonials
  FOR ALL USING ((jwt() ->> 'role') = 'admin');

-- Create triggers for updated_at columns
CREATE TRIGGER update_contacts_updated_at
  BEFORE UPDATE ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for demonstration
INSERT INTO projects (title, description, category, client, duration, image_url, technologies, metrics, featured) VALUES
(
  'E-Commerce Platform Redesign',
  'Complete redesign and development of a modern e-commerce platform with enhanced user experience and conversion optimization.',
  'website',
  'TechStore Inc.',
  '12 weeks',
  'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
  '[{"name": "React", "category": "frontend"}, {"name": "Node.js", "category": "backend"}, {"name": "MongoDB", "category": "backend"}]',
  '[{"label": "Conversion Rate", "value": "+45%"}, {"label": "Page Load Speed", "value": "1.2s"}, {"label": "Mobile Traffic", "value": "+80%"}]',
  true
),
(
  'SaaS Dashboard UI/UX',
  'Modern dashboard design for a SaaS platform focusing on data visualization and user workflow optimization.',
  'ui-ux',
  'DataFlow Solutions',
  '8 weeks',
  'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
  '[{"name": "Figma", "category": "design"}, {"name": "Adobe XD", "category": "design"}, {"name": "Principle", "category": "design"}]',
  '[{"label": "User Satisfaction", "value": "4.8/5"}, {"label": "Task Completion", "value": "+60%"}, {"label": "Support Tickets", "value": "-40%"}]',
  true
),
(
  'Lead Generation Funnel',
  'High-converting sales funnel with automated email sequences and CRM integration for a B2B software company.',
  'funnel',
  'CloudTech Pro',
  '6 weeks',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  '[{"name": "ClickFunnels", "category": "marketing"}, {"name": "Mailchimp", "category": "marketing"}, {"name": "HubSpot", "category": "marketing"}]',
  '[{"label": "Lead Quality", "value": "+120%"}, {"label": "Conversion Rate", "value": "18.5%"}, {"label": "Cost per Lead", "value": "-55%"}]',
  true
);

INSERT INTO testimonials (name, role, company, content, avatar_url, rating, featured) VALUES
(
  'Sarah Johnson',
  'Marketing Director',
  'TechStore Inc.',
  'Hakad Digital Lab transformed our online presence completely. The new website not only looks amazing but has increased our conversion rates by 45%. Their attention to detail and professional approach exceeded our expectations.',
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  5,
  true
),
(
  'Michael Chen',
  'CEO',
  'DataFlow Solutions',
  'The UI/UX redesign of our dashboard was a game-changer. User engagement increased significantly, and our support tickets decreased by 40%. The team really understood our users'' needs.',
  'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
  5,
  true
),
(
  'Emily Rodriguez',
  'Founder',
  'CloudTech Pro',
  'The lead generation funnel they built for us has been incredible. We''re getting higher quality leads at a fraction of the cost. ROI increased by 180% in just the first quarter.',
  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
  5,
  true
);