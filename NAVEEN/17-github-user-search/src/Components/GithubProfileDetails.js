import React from 'react';

class GithubProfileDetails extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        <span className='badge badge-success mx-1'>{this.props.profile.followers} followers</span>
                        <span className='badge badge-primary mx-1'>{this.props.profile.public_repos} repos</span>
                        <span className='badge badge-warning mx-1'>{this.props.profile.public_gists} gists</span>
                        <span className='badge badge-danger mx-1'>{this.props.profile.following} following</span>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <b> USERNAME:</b> {this.props.profile.login}
                            </li>
                            <li className="list-group-item">
                                <b> LOCATION:</b> {this.props.profile.location}
                            </li>
                            <li className="list-group-item">
                                <b> EMAIL:</b> {this.props.profile.email}
                            </li>
                            <li className="list-group-item">
                                <b> COMPANY:</b> {this.props.profile.company}
                            </li>
                            <li className="list-group-item">
                                <b> BLOG:</b> {this.props.profile.blog}
                            </li>
                            <li className="list-group-item">
                                <b> MEMBER SINCE:</b> {this.props.profile.created_at}
                            </li>
                            <li className="list-group-item">
                                <b> PROFILE-URL:</b> {this.props.profile.html_url}
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default GithubProfileDetails;
