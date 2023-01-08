import React, { Fragment } from 'react';

class GreetingCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: 'Hello'
        }
    }
    /*
    updateMessage = (value) => {
        this.setState({
            msg: value
        })
    }
         render() {
            return (
                <Fragment>
                    <div className="card">
                        <div className="card-body">
                            <h1>{this.state.msg}</h1>
                            <button onClick={this.updateMessage.bind(this, 'Good Morning')} className="btn btn-warning btn-sm" >Good Morning</button>
                            <button onClick={this.updateMessage.bind(this, 'Good Afternoon')} className="btn btn-success btn-sm" >Good Afternoon</button>
                            <button onClick={this.updateMessage.bind(this, 'Good Evening')} className="btn btn-danger btn-sm" >Good Evening</button>
                        </div>
                    </div>
    
                </Fragment>
            )
    
        }
     */

    sayGoodMorning = () => {
        this.setState({
            msg: 'Good Morning'
        })
    }
    sayGoodEvening = () => {
        this.setState({
            msg: 'Good Evening'
        })
    }
    sayGoodAfternoon = () => {
        this.setState({
            msg: 'Good Afternoon'
        })
    }

    render() {
        return (
            <Fragment>
                <div className="card">
                    <div className="card-body">
                        <h1>{this.state.msg}</h1>
                        <button onClick={this.sayGoodMorning} className="btn btn-warning btn-sm" >Good Morning</button>
                        <button onClick={this.sayGoodAfternoon} className="btn btn-success btn-sm" >Good Afternoon</button>
                        <button onClick={this.sayGoodEvening} className="btn btn-danger btn-sm" >Good Evening</button>
                    </div>
                </div>

            </Fragment>
        )

    }
}

export default GreetingCard;