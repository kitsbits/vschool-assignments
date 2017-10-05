import React from "react";
import Contact from "./Contact";
import contacts from "../contacts.json"

function getContacts(contacts) {
    return contacts.map(contact => {
        return (
            <Contact
                name={contact.name} number={contact.number} img={contact.img}/>)
    });
}

function App() {
    return (
        <div className="contact-container">
            <h1 className="header">Our Customer Support Team</h1>
            {getContacts(contacts)}
        </div>
    )
}

export default App;
