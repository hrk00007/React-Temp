import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Hritik",
            age: 22,
            course: "BE",
            stream: "CSE",
            college: "RGCER",
            hobbies: ["Photography", "coding", "teaching"],
            profileImage: "https://avatars.githubusercontent.com/u/67812755?v=4"
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-3 text-left">
                            <div className="card">
                                <img src={this.state.profileImage} alt="" />
                                <div className="card-body">
                                    <span><b>Name : </b> {this.state.name}</span><br />
                                    <span><b>Age  : </b>{this.state.age}</span><br />
                                    <span><b>Course : </b>{this.state.course}</span><br />
                                    <span><b>Stream : </b>{this.state.stream}</span><br />
                                    <span><b>College : </b>{this.state.college}</span><br />
                                    <span><b>Hobbies</b></span>
                                    <ul>

                                        <li>{this.state.hobbies[0]}</li>
                                        <li>{this.state.hobbies[1]}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    /* render() {
        let { profileImage, name, age, college, course, stream, hobbies } = this.state;
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-3 text-left">
                            <div className="card">
                                <img src={this.state.profileImage} alt="" />
                                <div className="card-body">
                                    <span><b>Name : </b> {name}</span><br />
                                    <span><b>Age  : </b>{age}</span><br />
                                    <span><b>Course : </b>{course}</span><br />
                                    <span><b>Stream : </b>{stream}</span><br />
                                    <span><b>College : </b>{college}</span><br />
                                    <span><b>Hobbies</b></span>
                                    <ul>

                                        <li>{hobbies[0]}</li>
                                        <li>{hobbies[1]}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    } */
}

export default Card;