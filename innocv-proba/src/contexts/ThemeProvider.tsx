import React, { createContext, useContext, useState, useEffect } from 'react';


interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}


const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);


export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};


const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setTheme(storedTheme ?? 'light');
  }, []);


  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};


export default ThemeProvider;