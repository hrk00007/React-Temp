import React, { Fragment } from 'react';

class InfoBox extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="p-3 mt-3 bg-dark text-white" id='reviews'>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <h5 className="display-4">Enjoy Your Holidays</h5>
                                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ipsa cupiditate repudiandae earum, voluptas dolor quisquam architecto. Perferendis, error, excepturi, quos impedit beatae alias voluptas ullam consectetur nemo veniam quam!</p>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default InfoBox;