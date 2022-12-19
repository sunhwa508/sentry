import React from 'react'
import ReactDOM from 'react-dom/client'
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from './App'
import './index.css'

// 프로덕트인 경우만 추적하기
// process.env.NODE_ENV === 'production' && 
Sentry.init({
  dsn: "https://fdfa40b4e81344feaf3de88202b69bf4@o4504355580280832.ingest.sentry.io/4504355582574594",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

