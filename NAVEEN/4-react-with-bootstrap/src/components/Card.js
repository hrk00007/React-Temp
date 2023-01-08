import React, { Fragment } from 'react';
import card1 from '../assets/img/Maldives.jpg';
import card2 from '../assets/img/Manali.jpg';
import card3 from '../assets/img/Munnar.jpg';
import card4 from '../assets/img/Shimla.jpg';
import card5 from '../assets/img/Thailand.jpg';
class Card extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-3 mt-3">
                            <div className="card">
                                <img src={card1} className="card-img-top img-fluid " alt="" />
                                <div className="card-body">
                                    <h4 className='card-title'>Maldives</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum fugit nam qui dolorum vitae eaque delectus iure! Soluta, impedit?</p>
                                    <button className='btn btn-dark btn-sm'>BOOK NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3">
                            <div className="card">
                                <img src={card2} className="card-img-top img-fluid" alt="" />
                                <div className="card-body">
                                    <h4 className='card-title'>Manali</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum fugit nam qui dolorum vitae eaque delectus iure! Soluta, impedit?</p>
                                    <button className='btn btn-dark btn-sm'>BOOK NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3">
                            <div className="card">
                                <img src={card3} className="card-img-top img-fluid" alt="" />
                                <div className="card-body">
                                    <h4 className='card-title'>Munnar</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum fugit nam qui dolorum vitae eaque delectus iure! Soluta, impedit?</p>
                                    <button className='btn btn-dark btn-sm'>BOOK NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3">
                            <div className="card">
                                <img src={card4} className="card-img-top img-fluid" alt="" />
                                <div className="card-body">
                                    <h4 className='card-title'>Shimla</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum fugit nam qui dolorum vitae eaque delectus iure! Soluta, impedit?</p>
                                    <button className='btn btn-dark btn-sm'>BOOK NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3">
                            <div className="card">
                                <img src={card5} className="card-img-top img-fluid" alt="" />
                                <div className="card-body">
                                    <h4 className='card-title'>Thailand</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum fugit nam qui dolorum vitae eaque delectus iure! Soluta, impedit?</p>
                                    <button className='btn btn-dark btn-sm'>BOOK NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Card;