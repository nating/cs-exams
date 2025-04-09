import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import contributors from '../contributors.js';

function Contributor({image, name, link}) {
  return (
    <a href={link} className={clsx('col col--1', styles.contributor)}>
      <img className={styles.contributorImage} src={image} alt={name} />
    </a>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Home`}
      description="A website for Computer Science Students in Trinity College Dublin.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttonRow}>
            <Link
              className={clsx(
                'home-page-button_src-pages- button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/first-year')}>
              First Year
            </Link>
            <Link
              className={clsx(
                'home-page-button_src-pages- button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/schols')}>
              Schols
            </Link>
            <Link
              className={clsx(
                'home-page-button_src-pages- button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/second-year')}>
              Second Year
            </Link>
            <Link
              className={clsx(
                'home-page-button_src-pages- button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/third-year')}>
              Third Year
            </Link>
            <Link
              className={clsx(
                'home-page-button_src-pages- button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/fourth-year')}>
              Fourth Year
            </Link>
            <Link
              className={clsx(
                'home-page-button_src-pages- button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/fifth-year')}>
              Fifth Year
            </Link>
          </div>
        </div>
      </header>
      <main>
      <section>
        <div className="container">
          <div className={styles.descriptionSection}>
            <div className="row">
              <div className="col col--6">
                <div className={styles.description}>
                  <div>
                    <h2>What is this thing?</h2>
                    <p>This website is to help Computer Science students in Trinity to more efficiently navigate the past examination papers.</p>
                    <p>The questions for some of the modules have been split up into topics as well as possible. Not all of the past questions have been put into a topic. In some modules, it is more difficult than others to accurately separate questions into topics, so it is important for students to go through the past papers by year as well.</p>
                    <p>In most browsers the "Questions By Topic" links will open up on the specific question in the pdf, but not Safari!</p>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <img className={styles.merchantImage} src='/img/merchant.png' alt='The Merchant' />
              </div>
            </div>
          </div>
        </div>
      </section>
        {contributors && contributors.length > 0 && (
          <section className={styles.contributors}>
            <h2>Wow! Who can I thank?!</h2>
            <h3>CS Exams has been contributed to by all these people...</h3>
            <div className="row">
              <div className="col col--1" />
              <div className="col col--10">
                <div className="d-flex justify-content-center">
                  {contributors.map((props, idx) => (
                    <Contributor key={props.link} {...props} />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                )}
                to='https://github.com/nating/cs-exams/graphs/contributors'>
                See the CS Exams contributors on GitHub
              </Link>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
