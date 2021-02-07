import React, { createContext } from 'react';

import PropTypes from 'prop-types';

export const ThemeContext = createContext({
  theme: '',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setDarkMode((prevState) => {
      localStorage.setItem('darkMode', JSON.stringify(!prevState));
      document.body.className = !prevState ? 'dark' : 'light';
      return !prevState;
    });
  };

  React.useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem('darkMode'));
    if (isDark) {
      setDarkMode(isDark);
    }
    document.body.className = isDark ? 'dark' : 'light';
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeWrapper = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

ThemeWrapper.propTypes = {
  element: PropTypes.element.isRequired,
};
