import './App.css';
import {Routes, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';

export default class App extends Component {

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path="/" element={<News setPrograss={this.setProgress}  key="general" pageSize = {12} country="us" category="general"/>}/>
          <Route exact path="/business" element={<News setPrograss={this.setProgress}  key="business" pageSize = {12} country="us" category="business"/>}/>
          <Route exact path="/entertainment" element={<News setPrograss={this.setProgress}  key="entertainment" pageSize = {12} country="us" category="entertainment"/>}/>
          <Route exact path="/health" element={<News setPrograss={this.setProgress}  key="health" pageSize = {12} country="us" category="health"/>}/>
          <Route exact path="/science" element={<News setPrograss={this.setProgress}  key="science" pageSize = {12} country="us" category="science"/>}/>
          <Route exact path="/sports" element={<News setPrograss={this.setProgress}  key="sports" pageSize = {12} country="us" category="sports"/>}/>
          <Route exact path="/technology" element={<News setPrograss={this.setProgress}  key="technology" pageSize = {12} country="us" category="technology"/>}/>
        </Routes>
      </div>
      <Footer/>
      </>
    )
  }
}

