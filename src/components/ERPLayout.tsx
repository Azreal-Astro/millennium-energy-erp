
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import { Card } from './ui/card';

const ERPLayout = () => {
  const { user } = useAuth();
  const [activeModule, setActiveModule] = useState('dashboard');

  const renderModuleContent = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard />;
      case 'supply-chain':
        return <ModulePlaceholder title="Supply Chain Management" description="Inventory tracking, order management, and vendor relations" />;
      case 'hr':
        return <ModulePlaceholder title="HR Module" description="Employee directory, leave management, and attendance tracking" />;
      case 'accounts':
        return <ModulePlaceholder title="Accounts Module" description="Invoice management, salary processing, and payment history" />;
      case 'tasks':
        return <ModulePlaceholder title={user?.role === 'admin' ? 'Task Management' : 'My Tasks'} description="Task tracking, assignments, and progress monitoring" />;
      case 'chat':
        return <ModulePlaceholder title="Team Chat" description="Real-time communication and collaboration" />;
      case 'notices':
        return <ModulePlaceholder title="Notice Board" description="Company announcements and important updates" />;
      case 'reports':
        return <ModulePlaceholder title="Reports & Analytics" description="Business intelligence and performance metrics" />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-erp-dark flex">
      <Sidebar activeModule={activeModule} onModuleChange={setActiveModule} />
      <main className="flex-1 overflow-auto">
        {renderModuleContent()}
      </main>
    </div>
  );
};

// Placeholder component for modules to be implemented
const ModulePlaceholder: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="p-6">
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-bold text-erp-silver mb-2">{title}</h1>
        <p className="text-erp-silver/70 mb-8">{description}</p>
      </div>
      
      <Card className="glass-morphism glow-box p-12 text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="w-24 h-24 bg-gradient-to-r from-erp-blue to-erp-accent rounded-2xl mx-auto mb-6 flex items-center justify-center animate-glow-pulse">
          <span className="text-3xl">🚀</span>
        </div>
        <h3 className="text-2xl font-semibold text-erp-silver mb-4">Coming Soon</h3>
        <p className="text-erp-silver/70 max-w-md mx-auto leading-relaxed">
          This module is currently under development. We're building amazing features that will enhance your workflow and productivity.
        </p>
        <div className="mt-8 w-32 h-1 bg-gradient-to-r from-erp-blue to-erp-accent rounded-full mx-auto"></div>
      </Card>
    </div>
  );
};

export default ERPLayout;
