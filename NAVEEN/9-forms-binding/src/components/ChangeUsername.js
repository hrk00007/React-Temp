import React from 'react';

class ChangeUsername extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Hritik"
        }
    }

    updateUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card bg-dark text-white">
                                <div className="card-header">
                                    <h4>Change Username</h4>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <input value={this.state.username} onChange={this.updateUsername} type="text" className="form-control" placeholder='Enter Your Name' />
                                            {/* <input value={this.state.username} type="text" className="form-control" placeholder='Enter Your Name' /> */}
                                        </div>
                                    </form>
                                    <p className="h3 bg-success text-center">{this.state.username}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ChangeUsername;