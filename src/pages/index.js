import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Publications from '../sections/Publications';
import Writing from '../sections/Writing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';
// import PlainForm from '../sections/PlainForm';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Publications />
    <Writing />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
