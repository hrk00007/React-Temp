import React from 'react';

class GithubSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }

    }
    updateUsername = (event) => {
        this.setState({ username: event.target.value })
    }

    submitSearch = (event) => {
        event.preventDefault();
        this.props.setUsername(this.state.username);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">

                            <div className="card">
                                <div className="card-header rare-wind-gradient">
                                    {/* <pre>{JSON.stringify(this.state)}</pre> */}
                                    <p className="h3 ">Github User Search</p>
                                </div>
                                <div className="card-body">
                                    <form className='form-inline' onSubmit={this.submitSearch}>
                                        <div className="form-group" >
                                            <input
                                                value={this.state.username}
                                                onChange={this.updateUsername}
                                                type="search" size="120" className="form-control " placeholder='Search Github User' />
                                        </div>
                                        <div>
                                            <input type="submit" size="40" value="search" className='btn btn-secondary search-btn' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default GithubSearch;