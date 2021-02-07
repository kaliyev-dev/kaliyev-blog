import React from 'react';

import { Link } from 'gatsby';

import ThemeSwitcher from './themeSwitcher';

const Header = () => (
  <header className="header">
    <div className="brand">
      <Link to="/">
        kaliyev.
        <div className="caption">blog</div>
      </Link>
    </div>
    <ThemeSwitcher />
  </header>
);

export default Header;
