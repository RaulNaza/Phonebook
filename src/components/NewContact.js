//Will allow us to create a new contact
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { contactsAPI } from "../restAPI/ContactsAPI";

function NewContact () {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');

    const navigate = useNavigate();

    useEffect(
        () => {
            getUser()
        }, []
    );

    const getUser = async () => {
        try{
            await contactsAPI.get();
        }
        catch{
            console.log('Failed getUser func.')
        }
    };

    const addContact = async (e) => {
        e.preventDefault();
        try{
            const contactObj = {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                streetAddress: streetAddress,
                city: city,
                state: state,
                zipcode: zipcode
            }
            await contactsAPI.post(contactObj);
            navigate('/ContactList', {replace: true});
        }
        catch{
            console.log('Failed addContact func.')
        }
    }

    return (
        <>
            <h1>New Contact</h1>

            <form className='new-contact-form bg-secondary-subtle'>
                <div className="section-div">
                    <label className="form-label">First Name:</label>
                    <input className="form-control" onChange={(e)=> setFirstName(e.target.value)}></input>
                </div>
                <div className="section-div">
                    <label className="form-label">Last Name:</label>
                    <input className="form-control" onChange={(e)=> setLastName(e.target.value)}></input>
                </div>
                <div className="section-div">
                    <label className="form-label">Phone:</label>
                    <input className="form-control" onChange={(e)=> setPhone(e.target.value)} placeholder="xxx-xxx-xxxx"></input>
                </div>
                <div className="section-div">
                    <label className="form-label">Email:</label>
                    <input className="form-control" onChange={(e)=> setEmail(e.target.value)}></input>
                </div>
                <div className="section-div">
                    <p style={{fontWeight: 'bold'}}>
                        Address
                    </p>
                    <div className="section-div-address">
                        <div className="section-div">
                            <label className="form-label">Street Addres:</label>
                            <input className="form-control" onChange={(e)=> setStreetAddress(e.target.value)}></input>
                        </div>
                        <div className="section-div">
                            <label className="form-label">City:</label>
                            <input className="form-control" onChange={(e)=> setCity(e.target.value)}></input>
                        </div>
                        <div className="section-div">
                            <label className="form-label">State:</label>
                            <input className="form-control" onChange={(e)=> setState(e.target.value)}></input>
                        </div>
                        <div className="section-div">
                            <label className="form-label">ZipCode:</label>
                            <input className="form-control" onChange={(e)=> setZipcode(e.target.value)}></input>
                        </div>
                    </div>
                        <button className="form-button btn btn-dark" onClick={(e)=>addContact(e)}>Add New Contact</button>
                </div>
            </form>

        </>
    )
};

export default NewContact