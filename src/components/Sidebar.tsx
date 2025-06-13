
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Home, 
  Package, 
  Users, 
  Calculator, 
  CheckSquare, 
  MessageSquare, 
  FileText, 
  BarChart3,
  Settings,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  activeModule: string;
  onModuleChange: (module: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeModule, onModuleChange }) => {
  const { user, logout } = useAuth();

  const adminModules = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'supply-chain', name: 'Supply Chain', icon: Package },
    { id: 'hr', name: 'HR Module', icon: Users },
    { id: 'accounts', name: 'Accounts', icon: Calculator },
    { id: 'tasks', name: 'Task Management', icon: CheckSquare },
    { id: 'chat', name: 'Team Chat', icon: MessageSquare },
    { id: 'notices', name: 'Notice Board', icon: FileText },
    { id: 'reports', name: 'Reports & Analytics', icon: BarChart3 },
  ];

  const employeeModules = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'tasks', name: 'My Tasks', icon: CheckSquare },
    { id: 'hr', name: 'HR Portal', icon: Users },
    { id: 'chat', name: 'Team Chat', icon: MessageSquare },
    { id: 'notices', name: 'Notices', icon: FileText },
  ];

  const modules = user?.role === 'admin' ? adminModules : employeeModules;

  return (
    <div className="w-64 bg-gradient-to-b from-erp-darker via-erp-dark to-erp-slate border-r border-erp-blue/20 flex flex-col h-full shadow-2xl">
      {/* Company Header */}
      <div className="p-6 border-b border-erp-blue/20">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-erp-blue to-erp-accent rounded-xl flex items-center justify-center animate-glow-pulse shadow-lg">
            <span className="text-base font-bold text-white">ME</span>
          </div>
          <div>
            <h2 className="text-erp-silver font-semibold text-sm bg-gradient-to-r from-erp-blue to-erp-accent bg-clip-text text-transparent">Millennium Energy</h2>
            <p className="text-erp-silver/70 text-xs">Global Pvt. Ltd.</p>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b border-erp-blue/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-erp-blue to-erp-accent rounded-full flex items-center justify-center shadow-lg">
            <span className="text-sm font-medium text-white">
              {user?.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-erp-silver truncate">{user?.name}</p>
            <p className="text-xs text-erp-accent capitalize font-medium">{user?.role}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {modules.map((module) => {
          const Icon = module.icon;
          const isActive = activeModule === module.id;
          
          return (
            <button
              key={module.id}
              onClick={() => onModuleChange(module.id)}
              className={`nav-item w-full text-left transition-all duration-300 ${
                isActive 
                  ? 'text-erp-accent bg-gradient-to-r from-erp-blue/20 to-erp-accent/20 border-l-4 border-erp-blue shadow-lg' 
                  : 'text-erp-silver hover:text-erp-accent hover:bg-gradient-to-r hover:from-erp-slate/30 hover:to-erp-blue/10'
              }`}
            >
              <Icon className={`w-5 h-5 mr-3 transition-all duration-300 ${isActive ? 'text-erp-accent scale-110' : ''}`} />
              <span className="font-medium">{module.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer Actions */}
      <div className="p-4 border-t border-erp-blue/20 space-y-2">
        <button className="nav-item w-full text-erp-silver hover:text-erp-accent hover:bg-gradient-to-r hover:from-erp-slate/30 hover:to-erp-blue/10 transition-all duration-300">
          <Settings className="w-5 h-5 mr-3" />
          <span className="font-medium">Settings</span>
        </button>
        <button 
          onClick={logout}
          className="nav-item w-full text-red-400 hover:text-red-300 hover:bg-gradient-to-r hover:from-red-500/20 hover:to-red-400/10 transition-all duration-300"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
