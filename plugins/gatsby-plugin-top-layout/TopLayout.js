import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../src/components/Page';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function TopLayout(props) {
  return (
    <React.Fragment>
      {/*   <Helmet>
        <meta charSet="utf-8" />
        <link
          rel="shortcut icon"
          href="https://assets.maccarianagency.com/favicons/thefront/favicon.ico"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>OpenYourEyes | Veronika Fraitová</title>
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="A modern design system for your new landing and web pages."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://assets.maccarianagency.com/screenshots/the-front/social.png"
        />
        <meta
          property="og:title"
          content="theFront | UI Kit by Maccarian Agency."
        />
        <meta
          property="og:description"
          content="A modern design system for your new landing and web pages."
        />
        <meta
          property="og:url"
          content="https://thefront.maccarianagency.com/"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Helmet> */}
      <form method="POST" data-netlify="true" name="recenze" hidden>
        <input type="text" name="meditaceName" value="recenze" />
        <input type="text" name="name" value="recenze" />
        <input type="text" name="email" value="recenze" />
        <input type="radio" name="currentScore" value="recenze" />
        <textarea name="zprava" value="recenze"></textarea>
      </form>
      <form method="POST" data-netlify="true" name="KontaktniFormular" hidden>
        <input type="text" name="name" value="recenze" />
        <input type="text" name="email" value="recenze" />
        <input type="tel" name="phone" value="recenze" />
        <input type="text" name="predmet" value="recenze" />
        <textarea name="zprava" value="recenze"></textarea>
      </form>
      <Page>
        <ToastContainer />
        {props.children}
      </Page>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
