import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import AdminLogin from './AdminLogin';
import AdminTestimonials from './AdminTestimonials';

const AdminLayout: React.FC = () => {
  const [session, setSession] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(!!session);
      setLoading(false);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const checkSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setSession(!!session);
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <AdminLogin onLogin={() => setSession(true)} />;
  }

  return <AdminTestimonials />;
};

export default AdminLayout;