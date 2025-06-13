
import React from 'react';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import LoginPage from '../components/LoginPage';
import ERPLayout from '../components/ERPLayout';

const AppContent = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-erp-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-erp-blue to-erp-accent rounded-2xl mx-auto mb-4 flex items-center justify-center animate-glow-pulse">
            <span className="text-xl font-bold text-white">ME</span>
          </div>
          <div className="w-8 h-8 border-2 border-erp-blue/30 border-t-erp-blue rounded-full animate-spin mx-auto"></div>
          <p className="text-erp-silver/70 mt-4">Loading your workspace...</p>
        </div>
      </div>
    );
  }

  return user ? <ERPLayout /> : <LoginPage />;
};

const Index = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default Index;
