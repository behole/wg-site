import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { SettingsIcon, NotificationIcon, PlaceholderIcon1, PlaceholderIcon2 } from '../icons';
import styles from './WorkModule.module.css';

export const WorkModule = () => {
  console.log('WorkModule rendering');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    // ... project data ...
  ];

  return (
    <div className={styles.workModule}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarTop}>
          <button>Settings</button>
          <button>Notifications</button>
        </div>
        
        <div className={styles.toolbarBottom}>
          <button>1</button>
          <button>2</button>
        </div>
      </div>

      <div className="main-content">
        {/* ... rest of your content ... */}
      </div>
    </div>
  );
}
