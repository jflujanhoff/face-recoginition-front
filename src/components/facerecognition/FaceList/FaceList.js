import React from 'react';

const FaceList = ({box}) => (
  <div>
    {
      box.map((boxElement, i)=>(
        <div key={i} className='bounding-box'
          style={{top:boxElement.topRow, bottom:boxElement.bottomRow, right:boxElement.rightColumn, left:boxElement.leftColumn}}>
        </div>
      ))
    }
  </div>
)

export default FaceList;
