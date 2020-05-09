import React from 'react';
import Photo from './Photo';


const CatList = ({cats}) =>{

  let photo;
  photo = cats.map(photo=>
    <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id}></Photo>)

  return(
    <div className="photo-container">
        <h2>Image of Cats</h2>
        <ul>
          {photo}
        </ul>
      </div>
  );

  }

export default CatList;