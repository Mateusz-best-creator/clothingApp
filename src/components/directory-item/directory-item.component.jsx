import './directory-item.styles.scss';
import React from 'react';

const DirectoryItem = ({title, imageUrl}) => {
    return (
        <div className="directory-item-container">
          <div className='background-image' alt='shop-advert' style={{
            backgroundImage: `url(${imageUrl})`,
          }}/>
          <div className="body">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      )
}

export default DirectoryItem;