import React from "react";

let ContactCard = (props) => {

    //let [selectedContact, setSelectedContact] = useState();


    return (
        <React.Fragment>
            {
                props.contact ?
                    <React.Fragment>
                        {/* <pre>{JSON.stringify(props.contact)}</pre> */}
                        <div className="card sticky-top">
                            <div className="card-header bg-dark">
                                <div className="p-4"></div>
                            </div>
                            <div className="card-body text-center">
                                <img src={props.contact.picture.large} className=" img-fluid img-thumbnail rounded-circle w-20 contact-img" alt="" />
                                <ul className="list-group text-left mt-2">
                                    <li className="list-group-item list-group-item-primary">
                                        <span className="text-dark pr-2 font-weight-bold">NAME:</span>{props.contact.name.first} {props.contact.name.last}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        <span className="text-dark pr-2 font-weight-bold">AGE:</span> {props.contact.dob.age}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        <span className="text-dark pr-2 font-weight-bold">EMAIL:</span> {props.contact.email}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        <span className="text-dark pr-2 font-weight-bold">ADDRESS:</span> {props.contact.location.city}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </React.Fragment>
                    : null
            }
        </React.Fragment >
    )
}

export default ContactCard;