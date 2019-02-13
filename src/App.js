import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

// Instantiate a new Clarifai app by passing in your API key.
const app = new Clarifai.App({apiKey: '1f51b47c35ce4464aaf4285af09b5870'});

const particlesOptions = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 700
        }
      }
      ,line_linked: {
        shadow: {
          enable: true,
          color: "#3CA9D1",
          blur: 5
        }
      }
    }
  }

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '' 
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value}); 
  }
 
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});

    app.models
      .predict(
        Clarifai.COLOR_MODEL, 
        'https://samples.clarifai.com/metro-north.jpg')
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
      
  }

  render() {
    return (
      <div className="App">
      <Particles className='particles'
              params={particlesOptions}
            />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
