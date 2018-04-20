import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <ul className="footer-links">
        <li>
          <a className="mr" href="#1">Terms</a>
        </li>
        <li>
          <a className="mr" href="#2">Privacy</a>
        </li>
        <li>
          <a className="mr" href="#3">Security</a>
        </li>
        <li>
          <a className="mr" href="#4">Licenses</a>
        </li>
        <li>
          <a href="#5">Contact Us</a>
        </li>
      </ul>
    );
  }

}

export default Footer;