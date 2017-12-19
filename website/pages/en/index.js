/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

class HomeSplash extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">
            <div className="projectLogo">
              <img src={siteConfig.baseUrl + 'img/cs-exams.svg'} />
            </div>
            <div className="inner">
              <h2 className="projectTitle">
                {siteConfig.title}
                <small>{siteConfig.tagline}</small>
              </h2>
              <div className="section promoSection">
                <div className="promoRow">
                  <div className="pluginRowBlock">
                    <Button
                      href={
                        siteConfig.baseUrl +
                        'docs/' +
                        'digital-logic-design.html'
                      }>
                      First Year
                    </Button>
                    <Button
                      href={
                        siteConfig.baseUrl +
                        'docs/' +
                        'computer-systems.html'
                      }>
                      Schols
                    </Button>
                    <Button
                      href={
                        siteConfig.baseUrl +
                        'docs/' +
                        'algorithms-and-data-structures.html'
                      }>
                      Second Year
                    </Button>
                    <Button
                      href={
                        siteConfig.baseUrl +
                        'docs/' +
                        'advanced-telecommunications.html'
                      }>
                      Third Year
                    </Button>
                    <Button
                      href={
                        siteConfig.baseUrl +
                        'docs/' +
                        'human-factors.html'
                      }>
                      Fourth Year
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    let language = this.props.language || 'en';
    const showcase = siteConfig.contributors
      .filter(contributor => {
        return contributor.pinned;
      })
      .map(contributor => {
        return (
          <a href={contributor.infoLink}>
            <img src={contributor.image} title={contributor.caption} borderRadius={'50%'}/>
          </a>
        );
      });

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">

          <Container padding={['bottom', 'top']} background="light">
            <GridBlock
              contents={[
                {
                  content: 'This website is to help Computer Science students in Trinity to more efficiently navigate the past examination papers.\n\n\n\nThe questions for some of the modules have been split up into topics as well as possible. Not all of the past questions have been put into a topic. In some modules, it is more difficult than others to accurately separate questions into topics, so it is important for students to go through the past papers by year as well.\n\n\n\nIn most browsers the "Questions By Topic" links will open up on the specific question in the pdf, but not Safari!',
                  title: 'What is this thing?',
                  image: siteConfig.baseUrl + 'img/merchant.png',
                  imageHeight: 300,
                  imageAlign: 'right',
                },
              ]}
            />
          </Container>

          <div className="productShowcaseSection paddingBottom">
            <h2>{"Wow! Who can I thank?!"}</h2>
            <p>This project has been contributed to by all these people...</p>
            <div className="logos">{showcase}</div>
            <div className="more-contributors">
              <a
                className="button"
                href={
                  siteConfig.repoUrl + '/' + 'graphs/contributors'
                }>
                See the {siteConfig.title} Contributors on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
