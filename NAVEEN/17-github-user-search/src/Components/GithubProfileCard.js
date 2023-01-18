import React from 'react';

class GithubProfileCard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        //let { profile } = this.props.profile; //we can also destructure the props data into a object
        return (
            <React.Fragment>

                <div className="card ">

                    <img src={this.props.profile.avatar_url} alt="" />


                    <div className="card-body">
                        <p className="h4">{this.props.profile.name}</p>
                        <p >{this.props.profile.bio}</p>
                        <a href={this.props.profile.html_url} className='btn btn-success btn-sm' target="_blank" rel="noreferrer">profile</a>
                    </div>
                </div>

            </React.Fragment>
        )
    }

}

export default GithubProfileCard;
