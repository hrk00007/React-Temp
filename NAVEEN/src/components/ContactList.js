import React, { useEffect, useState } from 'react';
import Axios from 'axios';
let ContactList = (props) => {

    let [contacts, setContact] = useState([]);
    //let [selectedContact, setSelectedContact] = useState();

    useEffect(() => {
        setContact(props.contactList);
    }, [])

    let sendData = (contact) => {
        props.sendContact(contact)
    }

    return (
        <React.Fragment>
            <div className="container">
                {/* <pre>{JSON.stringify(contacts)}</pre> */}
                {/* <h2>Contact List</h2> */}
                <div className="row">
                    <div className="col">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th>USERNAME</th>
                                    <th>IMAGE</th>
                                    <th>NAME</th>
                                    <th>AGE</th>
                                    <th>EMAIL</th>
                                    <th>LOCATION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.length > 0 ?
                                        <React.Fragment>
                                            {
                                                contacts.map((contact) => {
                                                    return (
                                                        <tr onMouseEnter={sendData.bind(this, contact)} onMouseLeave={sendData.bind(this, null)} key={contact.login.uuid} >
                                                            <td>{contact.login.uuid.substr(contact.login.uuid.length - 4)}</td>
                                                            <td> <img src={contact.picture.large} width="100px" height="100px" alt="" className='rounded-circle' /> </td>
                                                            <td>{contact.name.first} {contact.name.last}</td>
                                                            <td>{contact.dob.age}</td>
                                                            <td>{contact.email}</td>
                                                            <td>{contact.location.country}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </React.Fragment>
                                        : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContactList;