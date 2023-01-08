import React, { Fragment } from 'react';

class WishMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "Hello "
        }

    }
    updateMessage = () => {
        // this.state.msg = "Good Evening";  //we cant update state directly like this we have to use setState
        this.setState({
            msg: "Good Morning"
        })
    }
    updateMessageAgain = (value) => {
        this.setState({
            msg: value
        })
    }
    render() {
        return (
            <Fragment>
                <h1>{this.state.msg}</h1>
                <button onClick={this.updateMessage} className="tbtn btn-primary btn-sm p-2">Without Parameter</button>
                <button onClick={this.updateMessageAgain.bind(this, "Good Evening")} className="btn btn-primary btn-sm p-2">With Paramater</button>
            </Fragment>
        )
    }

}

export default WishMessage;