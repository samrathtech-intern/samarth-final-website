"use client";

import { useState, useEffect } from 'react';

const themes = [
  {
    name: "White + Lime",
    colors: {
      "--brand": "#89FF00",
      "--brand-dark": "#A3FF00",
      "--ink": "var(--ink)",
      "--muted": "#6B7280",
      "--bg": "#FFFFFF",
      "--surface": "#FFFFFF",
      "--line": "#E5E7EB",
      "--footer-bg": "var(--ink)",
      "--surface-soft": "#F3F4F6",
      "--surface-soft-2": "#E5E7EB",
      "--brand-text": "#111827"
    }
  },
  {
    name: "White + Emerald",
    colors: {
      "--brand": "#16A34A",
      "--brand-dark": "#22C55E",
      "--ink": "var(--ink)",
      "--muted": "#4B5563",
      "--bg": "#FFFFFF",
      "--surface": "#FFFFFF",
      "--line": "#E5E7EB",
      "--footer-bg": "#14532D",
      "--surface-soft": "#DCFCE7",
      "--surface-soft-2": "#BBF7D0",
      "--brand-text": "#FFFFFF"
    }
  },
  {
    name: "Navy + Orange",
    colors: {
      "--brand": "#0F4C81",
      "--brand-dark": "#FB923C",
      "--ink": "#1F2937",
      "--muted": "#4B5563",
      "--bg": "#F8FAFC",
      "--surface": "#FFFFFF",
      "--line": "#DDE5E3",
      "--footer-bg": "#102A43",
      "--surface-soft": "#EA580C",
      "--surface-soft-2": "#C2410C",
      "--brand-text": "#FFFFFF"
    }
  },
  {
    name: "Charcoal + Copper",
    colors: {
      "--brand": "#2D2D2D",
      "--brand-dark": "#D97706",
      "--ink": "#1F2937",
      "--muted": "#525252",
      "--bg": "#FAFAFA",
      "--surface": "#FFFFFF",
      "--line": "#E5E5E5",
      "--footer-bg": "var(--ink)",
      "--surface-soft": "#B45309",
      "--surface-soft-2": "#92400E",
      "--brand-text": "#FFFFFF"
    }
  },
  {
    name: "White + Teal",
    colors: {
      "--brand": "#0F766E",
      "--brand-dark": "#14B8A6",
      "--ink": "var(--ink)",
      "--muted": "#4B5563",
      "--bg": "#FFFFFF",
      "--surface": "#FFFFFF",
      "--line": "#DDE5E3",
      "--footer-bg": "#134E4A",
      "--surface-soft": "#CCFBF1",
      "--surface-soft-2": "#99F6E4",
      "--brand-text": "#FFFFFF"
    }
  }
];

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem('selected-theme');
    if (saved) {
      applyTheme(saved, false);
      setActiveTheme(saved);
    }
    
    // Add smooth transition to elements
    const style = document.createElement('style');
    style.innerHTML = `
      *, *::before, *::after {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, fill 0.3s ease, stroke 0.3s ease, box-shadow 0.3s ease !important;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  const applyTheme = (themeName: string, save = true) => {
    const theme = themes.find(t => t.name === themeName);
    if (!theme) return;
    
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    if (save) {
      localStorage.setItem('selected-theme', themeName);
      setActiveTheme(themeName);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', left: '24px', zIndex: 9999 }}>
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '100%',
          left: '0',
          marginBottom: '16px',
          width: '320px',
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          border: '1px solid #E5E7EB',
          padding: '20px',
          color: 'var(--ink)',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700 }}>Choose Theme</h3>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.5rem', lineHeight: 1, color: '#6B7280' }}>&times;</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '400px', overflowY: 'auto' }}>
            {themes.map(theme => (
              <div key={theme.name} 
                   style={{ 
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'space-between', 
                     padding: '12px', 
                     border: `2px solid ${activeTheme === theme.name ? theme.colors['--brand'] : '#E5E7EB'}`,
                     borderRadius: '16px',
                     cursor: 'pointer',
                     background: '#FAFAFA',
                     transition: 'all 0.2s'
                   }}
                   onClick={() => applyTheme(theme.name)}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '6px' }}>{theme.name}</div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: theme.colors['--brand'] }}></span>
                    <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: theme.colors['--ink'] }}></span>
                    <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: theme.colors['--bg'] }}></span>
                    <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: theme.colors['--footer-bg'] }}></span>
                  </div>
                </div>
                <button style={{
                  padding: '6px 12px',
                  borderRadius: '999px',
                  border: 'none',
                  background: activeTheme === theme.name ? theme.colors['--brand'] : '#E5E7EB',
                  color: activeTheme === theme.name ? '#fff' : '#4B5563',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}>
                  {activeTheme === theme.name ? 'Active' : 'Preview'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--ink)',
          color: '#ffffff',
          border: 'none',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s',
          transform: isOpen ? 'scale(0.95)' : 'scale(1)'
        }}
        aria-label="Toggle Theme Switcher"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
        </svg>
      </button>
    </div>
  );
}
