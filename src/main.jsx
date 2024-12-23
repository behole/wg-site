import React from 'react'
import ReactDOM from 'react-dom/client'
import RetroDashboard from './components/RetroDashboard'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RetroDashboard />
    </ErrorBoundary>
  </React.StrictMode>
) 