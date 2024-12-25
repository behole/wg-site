import React from 'react';
import { 
  Terminal, 
  Users, 
  Briefcase, 
  Heart, 
  MessageSquare, 
  Settings,
  HelpCircle,
  Info
} from 'lucide-react';

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

const Toolbar: React.FC = () => {
  return (
    <div className="fixed right-0 top-0 h-full w-16 bg-amber-950/95 border-l-2 border-amber-600/50 flex flex-col justify-between p-4">
      {/* Top Icons */}
      <div className="space-y-6">
        <Settings className="cursor-pointer hover:text-amber-400 transition-colors" />
        <Terminal className="cursor-pointer hover:text-amber-400 transition-colors" />
        <MessageSquare className="cursor-pointer hover:text-amber-400 transition-colors" />
      </div>
      
      {/* Bottom Icons */}
      <div className="space-y-6">
        <HelpCircle className="cursor-pointer hover:text-amber-400 transition-colors" />
        <Info className="cursor-pointer hover:text-amber-400 transition-colors" />
      </div>
    </div>
  );
};

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
    <div className="min-h-screen bg-amber-950 text-amber-500 p-6 pr-24 relative overflow-hidden">
      <CRTEffect />
      
      <nav className="flex justify-between items-center mb-6">
        <h1 className="font-mono text-2xl">AGENCY.OS</h1>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {widgetConfigs.map(({ title, icon, component: Component }) => (
          <RetroWidget key={title} title={title} icon={icon}>
            <Component />
          </RetroWidget>
        ))}
      </div>

      <Toolbar />
    </div>
  );
};

export default RetroDashboard;