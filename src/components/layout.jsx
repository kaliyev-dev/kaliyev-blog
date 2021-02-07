import React from 'react';

import PropTypes from 'prop-types';

import Aside from './aside';
import Footer from './footer';
import Header from './header';
import './layout.css';

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    <Aside />
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
