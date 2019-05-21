import React from 'react';
import FaceList from './FaceList/FaceList'
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className='center'>
      <div className='absolute pa2'>
        <img alt="" id='inputimage' src={imageUrl} width='700px' height='auto'/>
        {/* <div className='bounding-box' style={{top:box.topRow, bottom:box.bottomRow, right:box.rightColumn, left:box.leftColumn}}></div> */}
        <FaceList
          box={box}
        />
      </div>
    </div>
  );
}

export default FaceRecognition;
