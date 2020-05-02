import React from 'react';

const Row = (props) => {
    return (
        <div className="row mb-2 list-group-item-action">
            {props.children}
        </div>
    );
};

export default Row;