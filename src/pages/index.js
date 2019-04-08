import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Writing from '../sections/Writing';
import Header from '../components/Header';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Writing />
  </Layout>
);

export default IndexPage;
