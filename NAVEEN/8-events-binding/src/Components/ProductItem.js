import React, { Fragment } from "react";


class ProductItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {
                sno: 101,
                image: 'https://images.samsung.com/in/galaxy-watch5-pro/feature/galaxy-watch5-pro-battery-display-mo.png',
                name: 'Samsung Watch',
                qty: 2,
                price: 550
            }
        }
    }

    increaseQty = () => {
        console.log(this.state);
        this.setState({
            product: {
                ...this.state.product, //try commenting this line and check 
                qty: this.state.product.qty + 1
            }
        })
    }

    decreaseQty = () => {
        console.log(this.state);
        this.setState({
            product: {
                ...this.state.product, //try commenting this line and check 
                qty: (this.state.product.qty - 1 > 0) ? this.state.product.qty - 1 : 1
            }

        })
    }

    render() {
        return (
            <Fragment>
                <p>{JSON.stringify(this.state)}</p>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <table className="table table-striped table-dark table-bordered table text-center">
                                <thead className=" text-white thead-dark">
                                    <tr >
                                        <th>SNO</th>
                                        <th>PRODUCT IMAGE</th>
                                        <th>NAME</th>
                                        <th>PRICE</th>
                                        <th>QTY</th>
                                        <th>TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-light text-dark">
                                    <tr>
                                        <td>{this.state.product.sno}</td>
                                        <td> <img src={this.state.product.image} width="50px" height="50px" alt="" /> </td>
                                        <td>{this.state.product.name}</td>
                                        <td>{this.state.product.price}</td>
                                        <td>
                                            <i onClick={this.decreaseQty} className="fa fa-minus-circle mr-2" />
                                            {this.state.product.qty}
                                            <i onClick={this.increaseQty} className="fa fa-plus-circle ml-2" />
                                        </td>
                                        <td>{this.state.product.qty * this.state.product.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ProductItem;