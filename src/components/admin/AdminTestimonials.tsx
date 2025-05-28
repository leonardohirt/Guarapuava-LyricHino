import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Check, X, RefreshCw } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  created_at: string;
  approved: boolean;
}

const AdminTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (err) {
      setError('Failed to fetch testimonials');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleApproval = async (id: string, approved: boolean) => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({ approved })
        .eq('id', id);

      if (error) throw error;
      
      // Update local state
      setTestimonials(testimonials.map(t => 
        t.id === id ? { ...t, approved } : t
      ));
    } catch (err) {
      setError('Failed to update testimonial');
      console.error('Error:', err);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <RefreshCw className="animate-spin h-8 w-8 text-emerald-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Manage Testimonials</h2>
        <button
          onClick={() => fetchTestimonials()}
          className="flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200"
        >
          <RefreshCw size={16} className="mr-2" />
          Refresh
        </button>
      </div>

      <div className="grid gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`bg-white rounded-lg shadow-md p-6 ${
              testimonial.approved ? 'border-l-4 border-green-500' : 'border-l-4 border-yellow-500'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-gray-500">
                  {new Date(testimonial.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleApproval(testimonial.id, true)}
                  className={`p-2 rounded-full ${
                    testimonial.approved
                      ? 'bg-green-100 text-green-600'
                      : 'bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600'
                  }`}
                  title="Approve"
                >
                  <Check size={16} />
                </button>
                <button
                  onClick={() => handleApproval(testimonial.id, false)}
                  className={`p-2 rounded-full ${
                    !testimonial.approved
                      ? 'bg-red-100 text-red-600'
                      : 'bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600'
                  }`}
                  title="Reject"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.content}</p>
          </div>
        ))}

        {testimonials.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No testimonials found
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminTestimonials;