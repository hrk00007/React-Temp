import React from 'react';

class GithubRepos extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        <p className="h2 text-center">Your Repositories</p>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr className='thead-dark text-center'>
                                    <th className='h4'>Repository Name</th>
                                    <th className='h4'>Start Counts</th>
                                    <th className='h4'>Watchers Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.repos.map((repo) => {
                                        return (
                                            <React.Fragment>
                                                <tr className='text-center'>
                                                    <td className='h4'><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></td>
                                                    <td className=' '><span className='badge badge-success h3'>{repo.stargazers_count} Stars</span> </td>
                                                    <td className=' '><span className='badge badge-primary h3'>{repo.watchers_count} Watchers </span></td>
                                                </tr>

                                            </React.Fragment>

                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default GithubRepos;