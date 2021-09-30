import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({ id, name, imageUrl, price }) =>{ console.log(imageUrl)
    return(
    <div className='collection-item'>
        <div className='img' style={{'backgroundImage':`url(${imageUrl})`}} >
        </div>
        <div className='item-footer'>
            <span>{name}</span>
            <span>{price}</span>
        </div>
    </div>
)}

export default CollectionItem;