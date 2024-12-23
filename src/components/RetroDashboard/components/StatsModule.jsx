import React, { useState, useEffect } from 'react';
import { LineChart, YAxis, Tooltip, Line } from 'recharts';

export const StatsModule = () => {
  const [activeMetrics, setActiveMetrics] = useState(['projects', 'uptime']);
  const [data, setData] = useState([]);

  // ... rest of the component ...
};