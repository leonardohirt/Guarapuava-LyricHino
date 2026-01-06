/*
  # Fix Testimonials RLS Policies

  1. Changes
    - Add policy for authenticated users to view all testimonials (for admin panel)
    - Add policy for authenticated users to update testimonial approval status
    
  2. Security
    - Public users can only view approved testimonials
    - Public users can create new testimonials
    - Authenticated users (admins) can view all testimonials
    - Authenticated users (admins) can update testimonial approval status
*/

-- Drop existing policies if they need to be recreated
DROP POLICY IF EXISTS "Authenticated users can view all testimonials" ON testimonials;
DROP POLICY IF EXISTS "Authenticated users can update testimonials" ON testimonials;

-- Allow authenticated users to view all testimonials (for admin panel)
CREATE POLICY "Authenticated users can view all testimonials"
  ON testimonials
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update testimonials (for approval/rejection)
CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
