import React from 'react';

function Footer(props) {
  return (
    <footer>
      <span>
        <a href='http://www.stephenkempin.co.uk/' rel='author'>
          Designed &amp; developed by Stephen Kempin
        </a>{' '}
      </span>
      <span>
        <a
          href='https://github.com/SKempin/reactjs-tmdb-app'
          title='View Github Repo'
        >
          <i className='icon ion-social-github' aria-hidden='true'></i>
          View Code
        </a>
      </span>
      <span>
        <a
          href='https://play.google.com/store/apps/developer?id=SK+-+UK'
          title='View SK-UK Google Play Store'
        >
          <i className='icon ion-social-android' aria-hidden='true'></i>
          Developer Google Play Store
        </a>
      </span>
    </footer>
  );
}

export default Footer;
