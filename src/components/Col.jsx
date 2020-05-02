import React from 'react';

const Col = (props) => {
    return (
        <div className={props.width ? `col-${props.width} list-group align-middle` : "col list-group align-middle"}
        >
            {props.children}
        </div>
    );
};

export default Col;