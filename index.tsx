import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

/**
 * KEKEYO GAMES ENTRY POINT
 * Optimized for ESM-based browser environments.
 */

console.info("%cKEKEYO GAMES %cSystem Initialization...", "color: #3b82f6; font-weight: bold; font-size: 1.2em;", "color: #888;");

const container = document.getElementById('root');

if (!container) {
  console.error("CRITICAL ERROR: Root element '#root' not found. Ensure index.html is properly structured.");
} else {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.info("%cPortal Online %c- Cosmic interface operational.", "color: #10b981; font-weight: bold;", "color: #888;");
  } catch (err) {
    console.error("CRITICAL ERROR during initialization:", err);
    container.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; font-family:sans-serif; color:#ff4444; background:#050505; text-align:center; padding: 20px;">
        <h1 style="font-family: 'Orbitron', sans-serif; font-size: 2rem; margin-bottom: 1rem;">SYSTEM BREACH</h1>
        <p style="color: rgba(255,255,255,0.6);">Initialization failed. Check console for logs.</p>
        <button onclick="window.location.reload()" style="background:#3b82f6; color:white; border:none; padding:12px 24px; border-radius:12px; cursor:pointer; margin-top:24px; font-family:'Orbitron'; font-weight:bold;">Retry Connection</button>
      </div>
    `;
  }
}