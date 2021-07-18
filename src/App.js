import React from 'react'
import Routes from './routes'
import Header from './components/Header'
import Banner from './components/Banner'
import Plp from './pages/Plp'
import Footer from './components/Footer'
import './style.css'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Routes />
      <Plp />
      <Footer />
    </>
  );
}

export default App;