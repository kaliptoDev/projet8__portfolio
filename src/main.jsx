import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PageContentProvider from './providers/PageContentProvider.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import CurrentLanguageProvider from './providers/CurrentLanguageProvider.jsx'
import SkillsProvider from './providers/SkillsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CurrentLanguageProvider>
      <PageContentProvider>
        <SkillsProvider>
          <Router>
            <App />
          </Router>
        </SkillsProvider>
      </PageContentProvider>
    </CurrentLanguageProvider>
  </React.StrictMode >
)
