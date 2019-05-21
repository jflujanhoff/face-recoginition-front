import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div className='tc'>
        <p className='f3'>
          {'This magic brain will catch the info you need in this picture'}
        </p>

      <div className='center'>
        <div className='center pa4 br3 shadow-5 form'>
          <input onChange={onInputChange} className='f4 pa2 w-70 center' type='text'/>
          <button onClick={onButtonSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-dark-blue'>Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
