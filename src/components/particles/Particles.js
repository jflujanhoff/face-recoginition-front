
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './Particles.css'

class ParticlesBackground extends Component{
  render(){
      return (
          <Particles className='particles'
            params={{
              particles: {
                number: {
                  value: 150,
                  density: {
                    enable: true,
                    value_area: 800
                    }
                  },
                  shape: {
                     type: "circle",
                     stroke: {
                       width: 5,
                       color: "#ffffff"
                     },
                  }
                }
              }
            }
          />
        );
    };
}

export default ParticlesBackground;
