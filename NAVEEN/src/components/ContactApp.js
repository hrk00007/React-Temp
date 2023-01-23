import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ContactList from './ContactList';
import ContactCard from './ContactCard';

let ContactApp = () => {
    let [contacts, setContacts] = useState();
    let [selectedContact, setSelectedContact] = useState();

    useEffect(() => {
        Axios.get('https://gist.githubusercontent.com/hrk00007/d22d87776653bc2a8c57ccf1d8a1382f/raw/53a399f2faf4c0be0d551624c85a7cb93243ca2b/Contact-List.json')
            .then((response) => {
                setContacts(response.data)
            }).catch((error) => {
                console.log(error.errorMessage);
            })
    }, [])

    let receiveData = (contact) => {
        setSelectedContact(contact)
    }


    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    {/* <pre>{JSON.stringify(contacts)}</pre> */}
                    <p className="h3 bg-primary text-white text-center p-2">ContactApp</p>
                    <p className="lead text-center">In this Project we are going to host our json data to server and fetch it using Axios then pass those data from parent component to child component and show it beautifully</p>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-8">
                        {
                            contacts ?
                                <React.Fragment>
                                    <ContactList contactList={contacts} sendContact={receiveData} />
                                </React.Fragment>
                                : null
                        }

                    </div>
                    <div className="col-md-4">
                        <ContactCard contact={selectedContact} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactApp;