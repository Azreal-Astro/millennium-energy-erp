
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { 
  TrendingUp, 
  Users, 
  Package, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  DollarSign,
  Target,
  FileText,
  MessageSquare,
  Plus,
  Calendar,
  Bell
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState(3);

  // Button handlers for admin actions
  const handleAddEmployee = () => {
    alert('Opening Add Employee form...');
    console.log('Add Employee clicked');
  };

  const handleNewOrder = () => {
    alert('Opening New Order form...');
    console.log('New Order clicked');
  };

  const handlePostNotice = () => {
    alert('Opening Notice Board editor...');
    console.log('Post Notice clicked');
  };

  const handleViewReports = () => {
    alert('Opening Reports & Analytics dashboard...');
    console.log('View Reports clicked');
  };

  // Button handlers for employee actions
  const handleUpdateTasks = () => {
    alert('Opening Task Management...');
    console.log('Update Tasks clicked');
  };

  const handleLogHours = () => {
    alert('Opening Time Tracking system...');
    console.log('Log Hours clicked');
  };

  const handleTeamChat = () => {
    alert('Opening Team Chat application...');
    console.log('Team Chat clicked');
  };

  const handleHRPortal = () => {
    alert('Opening HR Portal...');
    console.log('HR Portal clicked');
  };

  const adminMetrics = [
    {
      title: 'Total Employees',
      value: '247',
      change: '+18%',
      trend: 'up',
      icon: Users,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Active Projects',
      value: '34',
      change: '+12%',
      trend: 'up',
      icon: Target,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Monthly Revenue',
      value: '$4.2M',
      change: '+24%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-violet-500 to-purple-600'
    },
    {
      title: 'Pending Orders',
      value: '156',
      change: '-5%',
      trend: 'down',
      icon: Package,
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Completed Tasks',
      value: '2,847',
      change: '+31%',
      trend: 'up',
      icon: CheckCircle,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'System Alerts',
      value: '12',
      change: 'Critical',
      trend: 'alert',
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-600'
    }
  ];

  const employeeMetrics = [
    {
      title: 'My Tasks',
      value: '18',
      change: '5 Due Today',
      trend: 'neutral',
      icon: CheckCircle,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Hours This Week',
      value: '38.5',
      change: '+6.5h',
      trend: 'up',
      icon: Clock,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Active Projects',
      value: '7',
      change: '3 Priority',
      trend: 'neutral',
      icon: Target,
      color: 'from-violet-500 to-purple-600'
    },
    {
      title: 'Performance Score',
      value: '94%',
      change: '+7%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const metrics = user?.role === 'admin' ? adminMetrics : employeeMetrics;

  const adminActivities = [
    { 
      action: 'Solar Panel installation order from TechCorp Industries - $2.4M contract signed', 
      time: '1 hour ago', 
      type: 'order',
      priority: 'high'
    },
    { 
      action: 'Sarah Chen completed Wind Turbine Project Alpha milestone 3 ahead of schedule', 
      time: '3 hours ago', 
      type: 'task',
      priority: 'medium'
    },
    { 
      action: 'Q3 Financial report generated - Revenue increased by 24% YoY', 
      time: '5 hours ago', 
      type: 'report',
      priority: 'high'
    },
    { 
      action: 'New employee onboarding: Michael Rodriguez - Senior Energy Consultant', 
      time: '8 hours ago', 
      type: 'hr',
      priority: 'medium'
    },
    { 
      action: 'Inventory restocked - 500 Solar Panel units received from Green Energy Solutions', 
      time: '1 day ago', 
      type: 'supply',
      priority: 'low'
    },
    { 
      action: 'Team meeting scheduled for Renewable Energy Strategy Q4 planning', 
      time: '1 day ago', 
      type: 'meeting',
      priority: 'medium'
    }
  ];

  const employeeActivities = [
    { 
      action: 'Updated progress on Solar Installation Project - Phase 2 completed', 
      time: '2 hours ago', 
      type: 'task',
      priority: 'high'
    },
    { 
      action: 'Submitted timesheet for Week 23 - 38.5 hours logged', 
      time: '4 hours ago', 
      type: 'hr',
      priority: 'medium'
    },
    { 
      action: 'Attended Wind Energy Training Session - Certification pending', 
      time: '6 hours ago', 
      type: 'training',
      priority: 'medium'
    },
    { 
      action: 'Collaborated with Design Team on Energy Efficiency Report', 
      time: '1 day ago', 
      type: 'collaboration',
      priority: 'medium'
    },
    { 
      action: 'Completed safety compliance training module', 
      time: '2 days ago', 
      type: 'training',
      priority: 'low'
    }
  ];

  const recentActivities = user?.role === 'admin' ? adminActivities : employeeActivities;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 border-red-500/30';
      case 'medium': return 'bg-amber-500/20 border-amber-500/30';
      case 'low': return 'bg-green-500/20 border-green-500/30';
      default: return 'bg-slate-500/20 border-slate-500/30';
    }
  };

  const getPriorityDot = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-400';
      case 'medium': return 'bg-amber-400';
      case 'low': return 'bg-green-400';
      default: return 'bg-slate-400';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-erp-dark via-erp-darker to-erp-slate min-h-screen">
      {/* Welcome Header */}
      <div className="animate-fade-in-up">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-erp-blue to-erp-accent bg-clip-text text-transparent mb-2">
              Welcome back, {user?.name}! 👋
            </h1>
            <p className="text-erp-silver/70 text-lg">
              {user?.role === 'admin' 
                ? 'Here\'s what\'s happening across Millennium Energy Global today.' 
                : 'Here\'s your personalized dashboard for today\'s activities.'}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => setNotifications(0)}
              className="relative bg-gradient-to-r from-erp-blue to-erp-accent hover:from-erp-blue-glow hover:to-erp-accent-glow"
            >
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {notifications}
                </span>
              )}
            </Button>
            <Button className="bg-gradient-to-r from-erp-slate to-erp-slate-light hover:from-erp-slate-light hover:to-erp-slate border border-erp-blue/30">
              <Calendar className="w-5 h-5 mr-2" />
              Today
            </Button>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.title} className="metric-card card-hover border-slate-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">{metric.title}</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-erp-blue to-erp-accent bg-clip-text text-transparent mb-2">{metric.value}</p>
                  <div className="flex items-center">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      metric.trend === 'up' ? 'text-emerald-400 bg-emerald-500/20 border border-emerald-500/30' : 
                      metric.trend === 'down' ? 'text-red-400 bg-red-500/20 border border-red-500/30' : 
                      metric.trend === 'alert' ? 'text-amber-400 bg-amber-500/20 border border-amber-500/30' : 'text-slate-400 bg-slate-500/20 border border-slate-500/30'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg animate-pulse-glow`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Activities & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        {/* Recent Activities */}
        <Card className="glass-morphism glow-box p-6 border-slate-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <div className="w-3 h-3 bg-gradient-to-r from-erp-blue to-erp-accent rounded-full mr-3 animate-pulse"></div>
            Recent Activities
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {recentActivities.map((activity, index) => (
              <div key={index} className={`p-4 rounded-lg border transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${getPriorityColor(activity.priority)}`}>
                <div className="flex items-start space-x-3">
                  <div className={`w-3 h-3 ${getPriorityDot(activity.priority)} rounded-full mt-1.5 flex-shrink-0 animate-pulse`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-200 text-sm leading-relaxed">{activity.action}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-slate-400 text-xs">{activity.time}</p>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        activity.priority === 'high' ? 'text-red-300 bg-red-500/20 border border-red-500/30' :
                        activity.priority === 'medium' ? 'text-amber-300 bg-amber-500/20 border border-amber-500/30' :
                        'text-green-300 bg-green-500/20 border border-green-500/30'
                      }`}>
                        {activity.priority}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="glass-morphism glow-box p-6 border-slate-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <div className="w-3 h-3 bg-gradient-to-r from-erp-accent to-erp-blue rounded-full mr-3 animate-pulse"></div>
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {user?.role === 'admin' ? (
              <>
                <Button
                  onClick={handleAddEmployee}
                  className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 hover:from-erp-blue/20 hover:to-erp-accent/20 rounded-xl transition-all duration-300 text-left border border-slate-600/50 hover:border-erp-blue/50 group h-auto flex flex-col items-start"
                >
                  <Users className="w-8 h-8 text-erp-accent mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-white text-sm font-semibold">Add Employee</p>
                  <p className="text-slate-400 text-xs mt-1">Onboard new team member</p>
                </Button>
                <Button
                  onClick={handleNewOrder}
                  className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 hover:from-erp-blue/20 hover:to-erp-accent/20 rounded-xl transition-all duration-300 text-left border border-slate-600/50 hover:border-erp-blue/50 group h-auto flex flex-col items-start"
                >
                  <Package className="w-8 h-8 text-erp-blue mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-white text-sm font-semibold">New Order</p>
                  <p className="text-slate-400 text-xs mt-1">Process client request</p>
                </Button>
                <Button
                  onClick={handlePostNotice}
                  className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 hover:from-erp-blue/20 hover:to-erp-accent/20 rounded-xl transition-all duration-300 text-left border border-slate-600/50 hover:border-erp-blue/50 group h-auto flex flex-col items-start"
                >
                  <FileText className="w-8 h-8 text-erp-teal mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-white text-sm font-semibold">Post Notice</p>
                  <p className="text-slate-400 text-xs mt-1">Company announcement</p>
                </Button>
                <Button
                  onClick={handleViewReports}
                  className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 hover:from-erp-blue/20 hover:to-erp-accent/20 rounded-xl transition-all duration-300 text-left border border-slate-600/50 hover:border-erp-blue/50 group h-auto flex flex-col items-start"
                >
                  <TrendingUp className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-white text-sm font-semibold">View Reports</p>
                  <p className="text-slate-400 text-xs mt-1">Analytics dashboard</p>
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={handleUpdateTasks}
                  className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 hover:from-erp-blue/20 hover:to-erp-accent/20 rounded-xl transition-all duration-300 text-left border border-slate-600/50 hover:border-erp-blue/50 group h-auto flex flex-col items-start"
                >
                  <CheckCircle className="w-8 h-8 text-erp-accent mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-white text-sm font-semibold">Update Tasks</p>
                  <p className="text-slate-400 text-xs mt-1">Mark progress</p>
                </Button>
                <Button
                  onClick={handleLogHours}
                  className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 hover:from-erp-blue/20 hover:to-erp-accent/20 rounded-xl transition-all duration-300 text-left border border-slate-600/50 hover:border-erp-blue/50 group h-auto flex flex-col items-start"
                >
                  <Clock className="w-8 h-8 text-erp-blue mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-white text-sm font-semibold">Log Hours</p>
                  <p className="text-slate-400 text-xs mt-1">Time tracking</p>
                </Button>
                <Button
                  onClick={handleTeamChat}
                  className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 hover:from-erp-blue/20 hover:to-erp-accent/20 rounded-xl transition-all duration-300 text-left border border-slate-600/50 hover:border-erp-blue/50 group h-auto flex flex-col items-start"
                >
                  <MessageSquare className="w-8 h-8 text-erp-teal mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-white text-sm font-semibold">Team Chat</p>
                  <p className="text-slate-400 text-xs mt-1">Collaborate</p>
                </Button>
                <Button
                  onClick={handleHRPortal}
                  className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 hover:from-erp-blue/20 hover:to-erp-accent/20 rounded-xl transition-all duration-300 text-left border border-slate-600/50 hover:border-erp-blue/50 group h-auto flex flex-col items-start"
                >
                  <Users className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-white text-sm font-semibold">HR Portal</p>
                  <p className="text-slate-400 text-xs mt-1">Personal info</p>
                </Button>
              </>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
