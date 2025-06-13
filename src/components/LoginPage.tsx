
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';

const LoginPage = () => {
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(formData.email, formData.password);
    } catch (err) {
      setError('Invalid credentials. Try admin@millennium.com or employee@millennium.com with password: password123');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-erp-darker via-erp-dark to-erp-slate flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-erp-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-erp-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-erp-blue/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-md animate-fade-in-up">
        {/* Company Logo and Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-erp-blue to-erp-accent rounded-2xl mb-4 animate-glow-pulse shadow-2xl">
            <span className="text-3xl font-bold text-white">ME</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-erp-blue to-erp-accent bg-clip-text text-transparent mb-2">
            Millennium Energy Global
          </h1>
          <p className="text-erp-silver/70 text-lg">Private Limited</p>
          <div className="w-32 h-1 bg-gradient-to-r from-erp-blue to-erp-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Login Form */}
        <Card className="glass-morphism glow-box p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-erp-blue/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-erp-blue to-erp-accent bg-clip-text text-transparent">Welcome Back</h2>
              <p className="text-erp-silver/70 mt-2 text-lg">Sign in to your ERP account</p>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm animate-bounce-in">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-erp-silver font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 bg-erp-slate/50 border-erp-blue/30 text-erp-silver input-glow focus:border-erp-blue transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-erp-silver font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="mt-2 bg-erp-slate/50 border-erp-blue/30 text-erp-silver input-glow focus:border-erp-blue transition-all duration-300"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-erp-blue to-erp-accent hover:from-erp-blue-glow hover:to-erp-accent-glow text-white font-medium py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-erp-blue/30"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </Button>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-gradient-to-r from-erp-slate/30 to-erp-blue/10 rounded-lg border border-erp-blue/30">
              <p className="text-sm text-erp-silver/70 text-center mb-3 font-medium">Demo Credentials:</p>
              <div className="text-sm text-erp-silver/90 space-y-2">
                <div className="flex items-center justify-between">
                  <span>👨‍💼 Admin:</span>
                  <span className="text-erp-accent font-mono">admin@millennium.com</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>👩‍💻 Employee:</span>
                  <span className="text-erp-accent font-mono">employee@millennium.com</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>🔑 Password:</span>
                  <span className="text-erp-accent font-mono">password123</span>
                </div>
              </div>
            </div>
          </form>
        </Card>

        {/* Company Mission */}
        <div className="mt-8 text-center">
          <p className="text-sm text-erp-silver/60 leading-relaxed">
  
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
