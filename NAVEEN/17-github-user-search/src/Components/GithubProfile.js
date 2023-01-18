import React from 'react';
import GithubProfileCard from './GithubProfileCard';
import GithubProfileDetails from './GithubProfileDetails';

class GithubProfile extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                {/* <pre className='text-left text-black'>Profile Data : {JSON.stringify(this.props.profile)}</pre> */}
                <div className="container mt-3">
                    <div className="row ">
                        <div className="col-md-4 ">
                            {
                                Object.keys(this.props).length !== 0 ?
                                    <React.Fragment>
                                        <GithubProfileCard profile={this.props.profile} />
                                    </React.Fragment>
                                    : null
                            }

                        </div>
                        <div className="col-md-8">
                            {
                                Object.keys(this.props).length !== 0 ?
                                    <React.Fragment>
                                        <GithubProfileDetails profile={this.props.profile} />
                                    </React.Fragment>
                                    : null
                            }
                        </div>
                    </div>

                </div>

            </React.Fragment>
        )
    }

}

export default GithubProfile;