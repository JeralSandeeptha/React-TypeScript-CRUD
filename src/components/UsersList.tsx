import React, { useState, useEffect } from 'react'
import '../styles/UsersList/UsersList.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

type UsersListProps = {
    
}

interface Contact{
    _id: number,
    name: string,
    subscription: string,
    image: string
}

const UsersList = (props: UsersListProps) => {

    const [contacts, setcontacts] = useState([]);

    const fetchContacts = async () => {
        try {
            await axios.get('http://localhost:8000/api/contacts/')
                .then( (res) => {
                    console.log(res.data);
                    setcontacts(res.data);
                })
                .catch( (error) => {
                    console.log(error.message);    
                })
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (id: number) => {
        try {
            const confirmed = window.confirm('Are you sure you want to delete this user?');

            if (confirmed) {
                axios.delete(`http://localhost:8000/api/contacts/${id}`)
                .then( () => {
                    alert('User deleted');
                    fetchContacts();
                })
                .catch( (error) => {
                    console.log(error);
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      fetchContacts();
    }, [])

    return (
        <div className='user-list-outer'>
            <div className="user-list-inner">
                {
                    contacts.map( (contact: Contact, index) => {
                        return (
                            <li key={index} className="box flex gap-x-6 py-5">
                                <Link to={`/users/${contact._id}`}>
                                    <div className="data flex min-w-0 gap-x-4">
                                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={contact.image} alt="user-img" />
                                        <div className="min-w-0 flex-auto">
                                            <p className="name text-sm font-semibold leading-6 text-gray-900">{contact.name}</p>
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-300">{contact.subscription} Months</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className='operations'>
                                    <Link to={`/updateuser/${contact._id}`}>
                                        <button className='update-btn'>Update</button>
                                    </Link>
                                    <button 
                                        onClick={ () => {
                                            handleDelete(contact._id);
                                        }}
                                        className='delete-btn'
                                    >Delete</button>
                                </div>
                            </li>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default UsersList