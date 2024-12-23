import React, { useState } from 'react';

const TeamWidget: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  
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

export default TeamWidget;