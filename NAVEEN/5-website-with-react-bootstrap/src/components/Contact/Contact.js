import React, { Fragment } from "react";

class Contact extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="p-3" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mt-3">
                                <div className="card">
                                    <div className="card-body">
                                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119064.89582489965!2d79.00246951519377!3d21.161231530280322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2c8d3ec93fbcfd%3A0x8291a78d0447ee8a!2sCode%20Heist!5e0!3m2!1sen!2sin!4v1672824680461!5m2!1sen!2sin" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-7 mt-5">
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control border-dark" placeholder="Enter your Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control border-dark" placeholder="Enter your Mobile No" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control border-dark" placeholder="Enter your Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control border-dark" placeholder="Enter your Query" />
                                    </div>
                                    <div>
                                        <input type="submit" className="btn btn-dark" value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Contact;