import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
      <h1 style={{ marginBottom: 0, fontSize: '3rem' }}>404</h1>
      <h5>Something&apos;s missing</h5>
      <p className="caption">
        The link you followed probably broken
        <br /> or the page has been removed
      </p>
      <Link to="/">&larr; Return homepage</Link>
    </div>
  </Layout>
);

export default NotFoundPage;
