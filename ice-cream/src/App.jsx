import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Header />
      <Body></Body>
      <Footer />
    </Layout>
  );
}

export default App;
