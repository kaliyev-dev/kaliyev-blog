import React from 'react';

import { ThemeContext } from '../context/theme';

const ThemeSwitcher = () => (
  <ThemeContext.Consumer>
    {({ darkMode, toggleTheme }) => (
      <label className="theme-switch" htmlFor="theme-switcher">
        <input
          checked={darkMode}
          className="theme-switch__input"
          id="theme-switcher"
          onChange={toggleTheme}
          type="checkbox"
        />
        <span className="theme-switch__slider">
          <svg
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              height="20"
              id="theme-switch__icon-mask"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              width="20"
              x="0"
              y="0"
            >
              <path
                d="M13.5 10C13.5 10 14 1 0 0L20 0L20 20L0 20C14 19 13.5 10 13.5 10Z"
                fill="black"
              />
            </mask>
            <g mask="url(#theme-switch__icon-mask)">
              <circle cx="10" cy="10" r="10" />
            </g>
          </svg>
        </span>
      </label>
    )}
  </ThemeContext.Consumer>
);

export default ThemeSwitcher;
