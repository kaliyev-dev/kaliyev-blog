/* eslint-disable react/no-danger */
import React from 'react';

import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Article = ({ data }) => {
  const article = data.markdownRemark;

  return (
    <Layout>
      <SEO title={article.frontmatter.title} />
      <article className="article">
        <header className="article__header">
          <h3 className="h3">{article.frontmatter.title}</h3>
          <ul>
            <li>
              <span className="caption">{article.frontmatter.category}</span>
            </li>
            <li>
              <span className="caption">{article.frontmatter.date}</span>
            </li>
            <li>
              <span className="caption">{article.fields.readingTime.text}</span>
            </li>
          </ul>
        </header>
        <div
          className="article__text"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </article>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        category
      }
      fields {
        readingTime {
          text
        }
      }
      html
    }
  }
`;

Article.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }).isRequired,
      fields: PropTypes.shape({
        readingTime: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Article;
