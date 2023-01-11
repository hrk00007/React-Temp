import React from 'react';
import Axios from 'axios';
class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            errorMessage: null
        }
    }

    componentDidMount() {
        Axios.get("https://dummyjson.com/users").then((response) => {
            // console.log(response.data.users);
            this.setState({
                users: response.data.users
            })
        }).catch((error) => {
            this.setState({
                errorMessage: error
            })
        })

    }

    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state.users)}</pre>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h2 bg-dark text-center text-white">Users Information using Axios</p>
                            <p className="h4 text-center">We are going to fetch data from this api <b className='bg-primary pr-2 pl-2'>https://dummyjson.com/users</b> using axios libary the code will we write inside componentDidMount() because we want to display
                                data after the component is fully loaded.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <div className="card peach-gradient">
                                <div className="card-header text-center h4">
                                    Raw data into table
                                </div>
                                <div className="card-body">
                                    <table className="table table-dark table-hover-bg-primary text-center ">
                                        <thead className='thead-light'>
                                            <tr>
                                                <th scope='col' className='font-weight-bold'>USERNAME</th>
                                                <th scope='col' className='font-weight-bold'>NAME</th>
                                                <th scope='col' className='font-weight-bold'>AGE</th>
                                                <th scope='col' className='font-weight-bold'>GENDER</th>
                                                <th scope='col' className='font-weight-bold'>EMAIL</th>
                                                <th scope='col' className='font-weight-bold'>PHONE</th>
                                                <th scope='col' className='font-weight-bold'>DOB</th>
                                                <th scope='col' className='font-weight-bold'>CITY</th>
                                                <th scope='col' className='font-weight-bold'>IMAGE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.users ?
                                                    <React.Fragment>
                                                        {
                                                            this.state.users.map((element) => {
                                                                return (
                                                                    <tr className='bg-dark text-white '>
                                                                        <td>{element.username}</td>
                                                                        <td>{element.firstName} {element.lastName}</td>
                                                                        <td>{element.age}</td>
                                                                        <td>{element.gender}</td>
                                                                        <td>{element.email}</td>
                                                                        <td>{element.phone}</td>
                                                                        <td>{element.birthDate}</td>
                                                                        <td>{element.address.city}</td>
                                                                        <td><img src={element.image} width="100px" alt="" /> </td>

                                                                    </tr>
                                                                )
                                                            })
                                                        }

                                                    </React.Fragment> : null
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default UserList;