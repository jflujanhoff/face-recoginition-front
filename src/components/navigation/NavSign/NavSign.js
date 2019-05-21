import React from 'react';

const NavSign = ({inputRouter, signedIn}) => {
  if (signedIn) {
    return(
      <div className="fl w-100 w-third-ns pa2">
        <div className="pv4">
          <p
            onClick={()=>inputRouter('signout')}
            className="link dim dark-gray b f4 tc db mb3 mb4-ns">Sign Out</p>
        </div>
      </div>
    )
  } else {
    return(
      <div className="fl w-100 w-third-ns pa2">
        <div className="pv4">
          <p
            onClick={()=>inputRouter('signin')}
            className="link dim dark-gray b f4 tc db mb3 mb4-ns">Sign In</p>
          <p
            onClick={()=>inputRouter('register')}
            className="link dim dark-gray b f4 tc db mb3 mb4-ns">Register</p>
        </div>
      </div>
    )
  }
}

export default NavSign;
