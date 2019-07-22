import React from 'react';

const Header = () => (
    <header id="js-header">
      <div className="container">
        <div className="headholder" />
        <p className="info">
          <span>Hi, my name is Joey Gordon. I like to build things for <strong>iOS</strong> and the <strong>web</strong>. I wear a lot of black, eat a lot of <strong>cookies</strong>, and enjoy Starbucks more than I probably should.*</span>
        </p>
        <p className="shadow">
          <span>Hi, my name is Joey Gordon. I like to build things for <strong>iOS</strong> and the <strong>web</strong>. I wear a lot of black, eat a lot of <strong>cookies</strong>, and enjoy Starbucks more than I probably should.*</span>
        </p>
        <p className="chill">
          <span>* The cookies at Starbucks are terrible</span>
        </p>
        <a className="cta js-contact" href="mailto:joey.gordon@gmail.com">
          <div className="flexcontain">
            <span>Get In Touch</span><span className="icon"><i className="fa fa-bolt" aria-hidden="true" /></span>
          </div>
        </a>

        <div className="photo-cred">
          <div className="camera">
            <i className="fa fa-camera" aria-hidden="true" />
          </div>
          <div className="tooltip">
            <span>
              Just Got Married
              | Valley Of Fire, Nevada
            </span>
          </div>
        </div>
      </div>
    </header>
);

export default Header;
