/*
  # Create testimonials table

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `role` (text, not null)
      - `content` (text, not null)
      - `created_at` (timestamp with time zone)
      - `approved` (boolean)

  2. Security
    - Enable RLS on `testimonials` table
    - Add policies for:
      - Anyone can read approved testimonials
      - Authenticated users can create testimonials
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  approved boolean DEFAULT false
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to read approved testimonials
CREATE POLICY "Anyone can read approved testimonials"
  ON testimonials
  FOR SELECT
  TO public
  USING (approved = true);

-- Policy to allow anyone to create testimonials
CREATE POLICY "Anyone can create testimonials"
  ON testimonials
  FOR INSERT
  TO public
  WITH CHECK (true);