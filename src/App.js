import React, { Component } from 'react';
import ParticlesBackground from './components/particles/Particles';
import Navigation from './components/navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import 'tachyons';
import './App.css';

const initialState = {
  input:'',
  imageUrl:'',
  box:[],
  route:'signin',
  signedIn: false,
  user:{
    id:'',
    name:'',
    email:'',
    entries:0,
    entryDate:''
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  inputUser = (data) => {
    this.setState({user:{
      id:data.id,
      name:data.name,
      email:data.email,
      entries:data.entries,
      entryDate:data.entryDate
    }})
  }

  // componentDidMount(){
  //   fetch('http://localhost:3000')
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // } Hello

  faceDetectionPattern = (data) => {
    // const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const clarifaiFace = data.outputs[0].data.regions;
    const image = document.getElementById('inputimage');
    const imageWidth = Number(image.width);
    const imageHeight = Number(image.height);
    console.log('Check1');
    console.log(clarifaiFace);
    let ClarifaiFaceArray = [];
    for (let data of clarifaiFace){
      ClarifaiFaceArray.push({
        leftColumn: data.region_info.bounding_box.left_col * imageWidth,
        topRow: data.region_info.bounding_box.top_row * imageHeight,
        rightColumn: imageWidth - (data.region_info.bounding_box.right_col * imageWidth),
        bottomRow: imageHeight - (data.region_info.bounding_box.bottom_row * imageHeight)
      });
    }
    console.log('check2');
    console.log(ClarifaiFaceArray);
    return ClarifaiFaceArray;
  }

  displayFaceBoxPattern = (box) => {
    this.setState({box:box});
    console.log(box);
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input:event.target.value});
  }

  onButtonSubmit = () => {
    console.log('Click');
    this.setState({imageUrl:this.state.input});
    fetch('https://simple-face-recognition-api.herokuapp.com/imageurl', {
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        input:this.state.input
      })
    })
    .then(responseApi => responseApi.json())
    .then(response => {
      if (response) {
        fetch('https://simple-face-recognition-api.herokuapp.com/image', {
          method:'put',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify({
            id:this.state.user.id
          })
        })
          .then(response => response.json())
          .then(count => {
            console.log(count.entries);
            this.setState(Object.assign(this.state.user, {entries:count.entries}))
            console.log(this.state);
          })
        }
        this.displayFaceBoxPattern(this.faceDetectionPattern(response))
      })
      .catch(err => console.log(err));
  }

  inputRouter = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({signedIn:true})
    }
    console.log(route);
    this.setState({route:route});
  }

  render() {
    let viewEnter
    if (this.state.route === 'home') {
      viewEnter = <div>
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition
              imageUrl={this.state.imageUrl}
              box={this.state.box}
            />
        </div>;
    } else if (this.state.route === 'signin') {
      viewEnter = <SignIn
                    inputRouter={this.inputRouter}
                    inputUser={this.inputUser}
                  />;
    } else {
      viewEnter = <Register
                    inputRouter={this.inputRouter}
                    inputUser={this.inputUser}
                  />
    }
    return (
      <div className="App">
        <ParticlesBackground/>
        <Navigation
          signedIn={this.state.signedIn}
          inputRouter={this.inputRouter}
        />
        {viewEnter}
        {/* {
          this.state.route === 'home'?
          <Register
            inputRouter={this.inputRouter}
            inputUser={this.inputUser}
          />
          :this.state.route === 'signin'?
            <SignIn
              inputRouter={this.inputRouter}
              inputUser={this.inputUser}
            />
          :
          <Register
            inputRouter={this.inputRouter}
            inputUser={this.inputUser}
          />
        } */}
      </div>
    );
  }
}

export default App;

// https://secure.i.telegraph.co.uk/multimedia/archive/02841/selfie_2841027b.jpg
// https://secure.i.telegraph.co.uk/multimedia/archive/02841/selfie_2841027b.jpg
