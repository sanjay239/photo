import React from 'react';
import PropTypes from 'prop-types';
import Flag from 'react-flags';

const PhotoCard = props => {

 debugger;

  return (

   
<div className="card">
  <img className="card-img-top" src={ props.photo.url} />
  <div className="card-body">
    <h5 className="card-title">{ props.photo.title}</h5>
  </div>
</div>
    
  )
}

PhotoCard.propTypes = {
  
};

export default PhotoCard;