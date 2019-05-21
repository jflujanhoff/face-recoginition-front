import React from 'react';
import Logo from '../logo/Logo'
import NavSign from './NavSign/NavSign'

const Navigation = ({inputRouter, signedIn}) => {
  return (
    <div className="tc">
      <div className="cf ph2-ns">
        <div className="fl w-100 w-third-ns pa2">
          <div className="pv4">
            <Logo/>
          </div>
        </div>
        <div className="fl w-100 w-third-ns pa1">
          <div className="pv4">
            <p className="link dim dark-gray b f1 f-headline-ns tc db mb3 mb4-ns">Super App!</p>
          </div>
        </div>
        <NavSign
          inputRouter={inputRouter}
          signedIn={signedIn}
        />
      </div>
    </div>
  )
}

export default Navigation;
