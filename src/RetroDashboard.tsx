import React from 'react';
import { Terminal, Users, Briefcase, Heart, MessageSquare, Settings } from 'lucide-react';

// Components
import CRTEffect from './components/CRTEffect';
import RetroWidget from './components/RetroWidget';

// Widgets
import ClientWidget from './widgets/ClientWidget';
import WorkWidget from './widgets/WorkWidget';
import EthosWidget from './widgets/EthosWidget';
import TeamWidget from './widgets/TeamWidget';
import ContactWidget from './widgets/ContactWidget';
import StatsWidget from './widgets/StatsWidget';

// Types
import { WidgetConfig } from './types';

const widgetConfigs: WidgetConfig[] = [
  { 
    title: 'CLIENTS', 
    icon: Users, 
    component: ClientWidget 
  },
  { 
    title: 'WORK', 
    icon: Briefcase, 
    component: WorkWidget 
  },
  { 
    title: 'ETHOS', 
    icon: Heart, 
    component: EthosWidget 
  },
  { 
    title: 'TEAM', 
    icon: Users, 
    component: TeamWidget 
  },
  { 
    title: 'CONTACT', 
    icon: MessageSquare, 
    component: ContactWidget 
  },
  { 
    title: 'STATS', 
    icon: Terminal, 
    component: StatsWidget 
  }
];

const RetroDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-amber-950 text-amber-500 p-6 relative overflow-hidden">
      <CRTEffect />
      
      <nav className="flex justify-between items-center mb-6">
        <h1 className="font-mono text-2xl">AGENCY.OS</h1>
        <div className="flex gap-4">
          <Settings className="cursor-pointer hover:text-amber-400" />
          <Terminal className="cursor-pointer hover:text-amber-400" />
          <MessageSquare className="cursor-pointer hover:text-amber-400" />
        </div>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {widgetConfigs.map(({ title, icon, component: Component }) => (
          <RetroWidget key={title} title={title} icon={icon}>
            <Component />
          </RetroWidget>
        ))}
      </div>
    </div>
  );
};

export default RetroDashboard;