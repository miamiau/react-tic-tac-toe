import React from 'react';

import '../css/GridItem.css';

const GridItem = props => {
    const { clickGridItem, displayValue, isEditable } = props;

    const handleClick = (event) => {
        if (isEditable) {
            clickGridItem();
        }
    }

    return (
        <button className='grid-item' onClick={handleClick}>
            {displayValue}
        </button>
    );
}

export default GridItem;