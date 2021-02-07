import React from 'react';

import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

const HomePage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.blog.articles.map((article) => (
      <article className="article" key={article.id}>
        <header className="article__header">
          <h3 className="h3">
            <Link to={article.fields.slug}>{article.frontmatter.title}</Link>
          </h3>
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
        <div className="article__text article__text--short">
          <p>{article.excerpt}</p>
        </div>
      </article>
    ))}
  </Layout>
);

export const query = graphql`
  query {
    blog: allMarkdownRemark {
      articles: nodes {
        fields {
          slug
          readingTime {
            text
          }
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          category
        }
        excerpt
        id
      }
    }
  }
`;

HomePage.propTypes = {
  data: PropTypes.shape({
    blog: PropTypes.shape({
      articles: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
            readingTime: PropTypes.shape({
              text: PropTypes.string.isRequired,
            }),
          }).isRequired,
          frontmatter: PropTypes.shape({
            category: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
          }).isRequired,
          excerpt: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default HomePage;
