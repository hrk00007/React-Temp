import React, { Fragment } from 'react';

let wishCard = (props) => {
    console.log(props)
    return (
        <Fragment>
            <div className="card">
                <div className="card-body">
                    <p className='h3 text-success'>This data is coming from Parent : {props.msg}</p>
                </div>
            </div>

        </Fragment>
    )
}

export default wishCard;