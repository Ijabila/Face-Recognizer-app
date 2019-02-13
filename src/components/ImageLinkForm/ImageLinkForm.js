import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
       <div>
           <p className='f3'>
                {'Ijabila\'s magic brain will detect the faces in your picture'}
           </p>
           <div className='center'>
                <div className='form center pa4 br3 shadow-5'> 
                    <input className='f4 pa2 w-70 center' type='text' onChanges={ onInputChange }/>
                    <button className='f4 pa2 w-30 grow link ph3 pv2 dib white bg-blue' 
                            onClick={onButtonSubmit} >
                    Detect</button>
                </div>
            </div>
        </div> 
    );
}

export default ImageLinkForm;