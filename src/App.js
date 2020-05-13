import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

// Main App
class App extends React.Component {
  constructor () {
    super()
    this.state = {
      axis: 'x'
    }
    this.setAxis = axis => {
      return () => this.setState({'axis': axis})
    }
  }
  render () {
    return (
      <React.Fragment>
        <Header/>
        <Main/> 
        <Footer/>      
      </React.Fragment>     
    )
  }
}

export default App;


