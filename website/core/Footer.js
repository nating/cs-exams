/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            <img
              src={this.props.config.baseUrl + this.props.config.footerIcon}
              alt={this.props.config.title}
              width="66"
              height="58"
            />
          </a>
          <div>
            <h5>Years</h5>
            <a
              href={
                this.props.config.baseUrl +
                'docs/' +
                this.props.language +
                '/digital-logic-design.html'
              }>
              First Year
            </a>
            <a
              href={
                this.props.config.baseUrl +
                'docs/' +
                this.props.language +
                '/computer-systems.html'
              }>
              Schols
            </a>
            <a
              href={
                this.props.config.baseUrl +
                'docs/' +
                this.props.language +
                '/algorithms-and-data-structures.html'
              }>
              Second Year
            </a>
            <a
              href={
                this.props.config.baseUrl +
                'docs/' +
                this.props.language +
                '/advanced-telecommunications.html'
              }>
              Third Year
            </a>
            <a
              href={
                this.props.config.baseUrl +
                'docs/' +
                this.props.language +
                '/human-factors.html'
              }>
              Fourth Year
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href={
                this.props.config.repoUrl + '/graphs/contributors'
              }>
              Contributors
            </a>
            <a
              href="mailto:nating@tcd.ie"
              target="_blank">
              Get in touch
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/nating/cs-exams">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/nating/cs-exams/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>
        <section className="copyright">
          Copyright &copy; {currentYear} nating
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
