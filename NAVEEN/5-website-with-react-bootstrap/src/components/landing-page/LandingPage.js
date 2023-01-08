import React, { Fragment } from "react";

class LandingPage extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="landing" id="home">
                    <div className="wrapper">
                        <div className="text-white text-center d-flex flex-column justify-content-center align-items-center h-100">
                            <h2 className="display-3">Welcome to Travel yaari</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus,<br /> dicta officiis nisi illo animi consequatur inventore ad fugiat perferendis magnam sed magni mollitia, iusto nostrum obcaecati. Sed, labore placeat?</p>
                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default LandingPage;