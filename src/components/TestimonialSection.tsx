import React, { useState } from 'react';
import { Quote, MessageSquarePlus, User, Send } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  date: string;
}

const TestimonialSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    content: ''
  });
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Professora",
      content: "Como professora, utilizo o hino de Guarapuava como ferramenta pedagógica. Ver o brilho nos olhos das crianças quando cantam juntas é emocionante. Este site facilitou muito meu trabalho em sala de aula.",
      date: "15/03/2025"
    },
    {
      id: 2,
      name: "João Pereira",
      role: "Historiador Local",
      content: "O hino de Guarapuava carrega em suas notas a essência de nossa história. Como historiador, aprecio a forma como esta plataforma preserva e dissemina este importante patrimônio cultural.",
      date: "02/04/2025"
    },
    {
      id: 3,
      name: "Ana Rodrigues",
      role: "Estudante",
      content: "Graças a este site e aos jogos interativos, consegui aprender o hino completo em apenas uma semana! As explicações sobre o significado de cada verso tornaram tudo mais interessante.",
      date: "20/04/2025"
    }
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would go logic to submit the testimonial
    alert("Obrigado por compartilhar seu depoimento!");
    setFormData({
      name: '',
      role: '',
      content: ''
    });
    setShowForm(false);
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
              className="bg-emerald-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm relative"
            >
              <div className="absolute top-6 right-6 text-emerald-200 dark:text-emerald-800">
                <Quote size={48} />
              </div>
              
              <div className="mb-6 relative z-10">
                <p className="italic text-gray-700 dark:text-gray-300">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="border-t border-emerald-100 dark:border-gray-600 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">{testimonial.role}</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.date}
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
                
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex items-center px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                  >
                    <Send size={16} className="mr-2" />
                    Enviar
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