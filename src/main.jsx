import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PageContentProvider from './providers/PageContentProvider.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import CurrentLanguageProvider from './providers/CurrentLanguageProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CurrentLanguageProvider>
      <PageContentProvider>
        <Router>
          <App />
        </Router>
      </PageContentProvider>
    </CurrentLanguageProvider>
  </React.StrictMode >
)
