
import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'admin' | 'employee';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('erp_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Demo users for testing
    const demoUsers: Record<string, User> = {
      'admin@millennium.com': {
        id: '1',
        name: 'Alex Rodriguez',
        email: 'admin@millennium.com',
        role: 'admin',
        department: 'Management'
      },
      'employee@millennium.com': {
        id: '2',
        name: 'Sarah Chen',
        email: 'employee@millennium.com',
        role: 'employee',
        department: 'Engineering'
      }
    };

    const userData = demoUsers[email];
    if (userData && password === 'password123') {
      setUser(userData);
      localStorage.setItem('erp_user', JSON.stringify(userData));
    } else {
      throw new Error('Invalid credentials');
    }
    
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('erp_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
