"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context for theme management
const ThemeContext = createContext({ theme: '', toggleTheme: () => {} });

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to wrap the application or component tree
export const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
  // Lazily initialize the theme state to ensure it's client-side only
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light'; // Default theme if window is not available
  });

  // Function to toggle the theme between dark and light
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme); // Persist theme preference
    }
    setTheme(newTheme); // Update theme state
  };

  // Effect hook to apply the theme to the document and handle changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }
  }, [theme]);

  // Provide the theme and toggleTheme through context to children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
