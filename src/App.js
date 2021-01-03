import React, { Component } from 'react'
import './resources/styles.css'
import Header from './component/header_footer/Header'
import Featured from './component/featured'
import ContactNfo from './component/contactNfo'
import Highlight from './component/Highlight'
import Pricing from './component/Pricing'
import Location from './component/location'
import Footer from './component/header_footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px", background:"cornflowerblue"}}>
        <Header/>
        <Featured/>
        <ContactNfo/>
        <Highlight/>
        <Pricing/>
        <Location/>
        <Footer/>
        
       
        
      </div>
    )
  }
}

export default App;
