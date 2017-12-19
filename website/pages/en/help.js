/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Help extends React.Component {
  render() {
    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h2>Want to add to the website?</h2>
            </header>
            <p>This project is for students and can only "maintained" if students contribute to it. So every contribution is gladly welcomed!</p>
            <p/>
            <p/>
            <p>To changes to a page, just make a click on the "edit" button in the top right of the page.</p>
            <p/>
            <p/>
            <p>To make significant changes, just make a <a href="https://github.com/nating/cs-exams/pull/new/master">pull request</a> on <a href="https://github.com/nating/cs-exams/">the repository</a>.</p>
            <p/>
            <p/>
            <p>The site is made using <a href="https://docusaurus.io">Docusaurus</a> so that the pages are generated from Markdown files to make it easy for anyone to edit 😁</p>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
