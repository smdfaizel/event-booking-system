/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

// Define styles using Emotion
const footerStyle = css`
  text-align: center;
  padding: 1rem;
  background: #f1f1f1;
  position: absolute;
  bottom: 0;
  width: 100%
`;

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      <p>
        Contact us: <a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a>
      </p>
    </footer>
  );
};

export default Footer;
