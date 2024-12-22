import React, { useState, useEffect } from 'react';
import { Terminal, Users, Briefcase, Heart, MessageSquare, Settings } from 'lucide-react';
import { LineChart, Line, YAxis, Tooltip } from 'recharts';

const CRTEffect = () => (
  <div className="pointer-events-none fixed inset-0 z-50">
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,115,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] animate-scan mix-blend-multiply"></div>
    <div className="absolute inset-0 opacity-[0.15] animate-flicker bg-gradient-to-b from-transparent via-amber-900/50 to-transparent"></div>
    <div className="absolute inset-0 rounded-lg bg-radial-gradient pointer-events-none"></div>
  </div>
);

const RetroWidget = ({ title, children, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-amber-950/90 border-2 ${
        isHovered ? 'border-amber-500' : 'border-amber-600/50'
      } p-4 rounded-lg flex flex-col transition-all duration-300 ${
        isHovered ? 'shadow-lg shadow-amber-900/50' : ''
      }`}
    >
      <div className="flex items-center mb-4 text-amber-500">
        <Icon className="mr-2" size={20} />
        <h3 className="font-mono text-lg">{title}</h3>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

const WorkModule = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    { 
      id: 1, 
      name: 'Project Alpha', 
      status: 'IN_PROGRESS', 
      progress: 75,
      timeline: 'Q4 2024',
      type: 'FRONTEND'
    },
    { 
      id: 2, 
      name: 'Project Beta', 
      status: 'PLANNING', 
      progress: 25,
      timeline: 'Q1 2025',
      type: 'FULLSTACK'
    },
    { 
      id: 3, 
      name: 'Project Gamma', 
      status: 'COMPLETED', 
      progress: 100,
      timeline: 'Q3 2024',
      type: 'DESIGN'
    }
  ];

  return (
    <div className="space-y-3">
      {projects.map((project) => (
        <div 
          key={project.id}
          onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
          className={`cursor-pointer p-2 rounded font-mono transition-all duration-300 ${
            selectedProject === project.id ? 'bg-amber-900/30' : 'bg-black/20 hover:bg-amber-900/20'
          }`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="mr-2">→</span>
              {project.name}
            </div>
            <span className={`text-xs px-2 py-1 rounded ${
              project.status === 'COMPLETED' ? 'bg-green-900/30' :
              project.status === 'IN_PROGRESS' ? 'bg-blue-900/30' :
              'bg-yellow-900/30'
            }`}>
              {project.status}
            </span>
          </div>
          
          {selectedProject === project.id && (
            <div className="mt-2 space-y-2 text-sm">
              <div className="bg-black/20 h-2 rounded overflow-hidden">
                <div 
                  className="bg-amber-500 h-full transition-all duration-500"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <div className="flex justify-between text-amber-400">
                <span>{project.type}</span>
                <span>{project.timeline}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const TeamModule = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const roles = {
    DESIGNERS: {
      count: 3,
      status: [
        { name: 'Sarah', status: 'ACTIVE', project: 'Project Alpha' },
        { name: 'Michael', status: 'IN_MEETING', project: 'Project Beta' },
        { name: 'Emma', status: 'BREAK', project: 'Project Gamma' }
      ]
    },
    DEVELOPERS: {
      count: 4,
      status: [
        { name: 'Alex', status: 'ACTIVE', project: 'Project Beta' },
        { name: 'Jamie', status: 'CODE_REVIEW', project: 'Project Alpha' },
        { name: 'Chris', status: 'DEBUGGING', project: 'Project Gamma' },
        { name: 'Pat', status: 'DEPLOYING', project: 'Project Alpha' }
      ]
    },
    STRATEGISTS: {
      count: 2,
      status: [
        { name: 'Jordan', status: 'CLIENT_CALL', project: 'Project Beta' },
        { name: 'Taylor', status: 'PLANNING', project: 'Project Gamma' }
      ]
    }
  };

  return (
    <div className="space-y-2 font-mono">
      {Object.entries(roles).map(([role, data]) => (
        <div key={role}>
          <div 
            onClick={() => setSelectedRole(selectedRole === role ? null : role)}
            className={`flex justify-between items-center p-2 cursor-pointer rounded transition-colors ${
              selectedRole === role ? 'bg-amber-900/30' : 'hover:bg-amber-900/20'
            }`}
          >
            <span>{role}</span>
            <span className="bg-black/20 px-2 rounded">{data.count}</span>
          </div>
          
          {selectedRole === role && (
            <div className="mt-2 ml-4 space-y-1">
              {data.status.map((member, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm bg-black/20 p-1 rounded">
                  <span>{member.name}</span>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 rounded text-xs ${
                      member.status === 'ACTIVE' ? 'bg-green-900/30' :
                      member.status === 'IN_MEETING' ? 'bg-yellow-900/30' :
                      'bg-blue-900/30'
                    }`}>
                      {member.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const ClientSlotMachine = () => {
  const [spinning, setSpinning] = useState(false);
  const clients = ['Client A', 'Client B', 'Client C'];
  const [selected, setSelected] = useState(clients[0]);

  const spin = () => {
    setSpinning(true);
    setTimeout(() => {
      setSelected(clients[Math.floor(Math.random() * clients.length)]);
      setSpinning(false);
    }, 1000);
  };

  return (
    <div className="text-center">
      <div className="bg-black/20 p-4 rounded-lg mb-4 font-mono">
        <span className={`text-xl ${spinning ? 'opacity-50' : ''}`}>
          {selected}
        </span>
      </div>
      <button 
        onClick={spin}
        className="bg-amber-600 text-black px-4 py-2 rounded hover:bg-amber-500 transition-colors"
        disabled={spinning}
      >
        SPIN
      </button>
    </div>
  );
};

const StatsModule = () => {
  const [activeMetrics, setActiveMetrics] = useState(['projects', 'uptime']);
  const [data, setData] = useState([]);
  
  const generateDataPoint = (timestamp) => ({
    timestamp,
    projects: Math.floor(Math.random() * 20) + 130,
    uptime: Math.floor(Math.random() * 5) + 95,
    status: Math.floor(Math.random() * 30) + 70,
    engagement: Math.floor(Math.random() * 40) + 60,
    performance: Math.floor(Math.random() * 25) + 75,
    velocity: Math.floor(Math.random() * 35) + 65,
  });

  useEffect(() => {
    const initialData = Array.from({ length: 20 }, (_, i) => 
      generateDataPoint(new Date(Date.now() - (19 - i) * 1000)));
    setData(initialData);

    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData.slice(1), generateDataPoint(new Date())];
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const metrics = {
    projects: { color: '#F59E0B', label: 'PROJECTS' },
    uptime: { color: '#10B981', label: 'UPTIME' },
    status: { color: '#3B82F6', label: 'STATUS' },
    engagement: { color: '#8B5CF6', label: 'ENGAGEMENT' },
    performance: { color: '#EC4899', label: 'PERFORMANCE' },
    velocity: { color: '#F97316', label: 'VELOCITY' },
  };

  const toggleMetric = (metric) => {
    setActiveMetrics(prev => 
      prev.includes(metric) 
        ? prev.filter(m => m !== metric)
        : [...prev, metric]
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {Object.entries(metrics).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => toggleMetric(key)}
            className={`px-2 py-1 text-xs font-mono rounded transition-colors ${
              activeMetrics.includes(key)
                ? 'bg-amber-600 text-black'
                : 'bg-black/20 text-amber-500'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      
      <div className="bg-black/20 rounded-lg p-2 h-48">
        <LineChart width={450} height={180} data={data}>
          <YAxis 
            domain={[0, 100]} 
            stroke="#92400E"
            tick={{ fill: '#92400E' }}
            width={30}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#78350F',
              border: '1px solid #92400E',
              borderRadius: '4px',
              color: '#F59E0B',
              fontFamily: 'monospace'
            }}
            formatter={(value, name) => [
              `${value}${name === 'uptime' ? '%' : ''}`,
              metrics[name].label
            ]}
            labelFormatter={(label) => {
              const date = new Date(label);
              return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
            }}
          />
          {activeMetrics.map(metric => (
            <Line
              key={metric}
              type="monotone"
              dataKey={metric}
              stroke={metrics[metric].color}
              dot={false}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </div>

      <div className="grid grid-cols-2 gap-2 font-mono text-sm">
        {activeMetrics.map(metric => (
          <div key={metric} className="flex justify-between">
            <span>{metrics[metric].label}:</span>
            <span>{data[data.length - 1]?.[metric] || 0}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const RetroDashboard = () => {
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
        <RetroWidget title="CLIENTS" icon={Users}>
          <ClientSlotMachine />
        </RetroWidget>
        
        <RetroWidget title="WORK" icon={Briefcase}>
          <WorkModule />
        </RetroWidget>
        
        <RetroWidget title="ETHOS" icon={Heart}>
          <p className="font-mono leading-relaxed">
            CREATIVITY.TECHNOLOGY.IMPACT
          </p>
        </RetroWidget>
        
        <RetroWidget title="TEAM" icon={Users}>
          <TeamModule />
        </RetroWidget>
        
        <RetroWidget title="CONTACT" icon={MessageSquare}>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="ENTER_MESSAGE"
              className="w-full bg-black/20 p-2 rounded border border-amber-600/50 text-amber-500 placeholder-amber-700"
            />
            <button className="w-full bg-amber-600 text-black p-2 rounded hover:bg-amber-500">
              SEND
            </button>
          </form>
        </RetroWidget>
        
        <RetroWidget title="STATS" icon={Terminal}>
          <StatsModule />
        </RetroWidget>
      </div>
    </div>
  );
};

export default RetroDashboard;