import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Aside = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.jpeg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `);

  return (
    <aside className="about">
      <Img
        alt="Almaz Kaliyev"
        className="about__image"
        fluid={data.file.childImageSharp.fluid}
      />
      <div className="about__info">
        <div className="subtitle-1 about__title">Almaz Kaliyev</div>
        <div className="body-2 about__caption">
          React Developer &amp; just a good person.
        </div>
      </div>
    </aside>
  );
};

export default Aside;
