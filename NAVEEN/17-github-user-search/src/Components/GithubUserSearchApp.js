import React from 'react';
import { clientID, clientSecret } from './githubcredentials';
import GithubSearch from './GithubSearch';
import Axios from 'axios'
import GithubProfile from './GithubProfile';
import GithubRepos from './GithubRepos';
class GithubUserSearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            errorMessage: '',
            profile: {},
            repos: []
        }
    }

    getUsername = (usernameFromSearch) => {
        this.setState({ username: usernameFromSearch });
        this.searchUserProfile(usernameFromSearch);
        this.searchUserRepos(usernameFromSearch);
    }

    searchUserProfile = (usernameFromSearch) => {
        let dataUrl = `https://api.github.com/users/${usernameFromSearch}?clientId=${clientID}&clientSecret=${clientSecret}`;
        Axios.get(dataUrl).then((response) => {
            this.setState({ profile: response.data })
        }).catch((error) => {
            this.setState({ errorMessage: error })
        })

    };
    searchUserRepos = (usernameFromSearch) => {
        let dataUrl = `https://api.github.com/users/${usernameFromSearch}/repos?clientId=${clientID}&clientSecret=${clientSecret}`;
        Axios.get(dataUrl).then((response) => {
            this.setState({ repos: response.data })
        }).catch((error) => {
            this.setState({ errorMessage: error })
        })
    };

    render() {
        return (
            <React.Fragment>
                {/* <pre className='text-left text-black'>Parent Component : {JSON.stringify(this.state.profile)}</pre> */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <GithubSearch setUsername={this.getUsername} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                Object.keys(this.state.profile).length !== 0 ?
                                    <GithubProfile profile={this.state.profile} />
                                    : null
                            }
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            {
                                this.state.repos.length > 0 ?
                                    <GithubRepos repos={this.state.repos} />
                                    : null
                            }

                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }

}

export default GithubUserSearchApp;