import React, { useState, useEffect } from 'react';
import { MessageSquarePlus, User, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  created_at: string;
}

const TestimonialSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    content: ''
  });
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  
  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const { error } = await supabase
        .from('testimonials')
        .insert([
          {
            name: formData.name,
            role: formData.role,
            content: formData.content,
          }
        ]);

      if (error) throw error;

      setSubmitMessage({
        type: 'success',
        text: 'Obrigado! Seu depoimento foi enviado para aprovação.'
      });
      setFormData({ name: '', role: '', content: '' });
      setTimeout(() => setShowForm(false), 3000);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Ocorreu um erro ao enviar seu depoimento. Por favor, tente novamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">
            Depoimentos
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Veja o que os moradores de Guarapuava têm a dizer sobre o hino da cidade e seu significado
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-emerald-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm"
            >
              <div className="mb-6">
                <p className="italic text-gray-700 dark:text-gray-300">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="border-t border-emerald-100 dark:border-gray-600 pt-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">{testimonial.role}</p>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {new Date(testimonial.created_at).toLocaleDateString('pt-BR')}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto">
          {!showForm ? (
            <div className="text-center">
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <MessageSquarePlus size={20} className="mr-2" />
                Compartilhar Meu Depoimento
              </button>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                Compartilhe o que o hino significa para você
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Seu Nome
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-800 dark:text-white"
                        placeholder="Maria Silva"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Ocupação/Função
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-800 dark:text-white"
                      placeholder="Ex: Estudante, Professora, Morador..."
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Seu Depoimento
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    rows={4}
                    value={formData.content}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-800 dark:text-white"
                    placeholder="Compartilhe o que o hino de Guarapuava significa para você..."
                  />
                </div>

                {submitMessage && (
                  <div className={`mb-4 p-3 rounded-lg ${
                    submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}
                
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    disabled={isSubmitting}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex items-center px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    <Send size={16} className="mr-2" />
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;