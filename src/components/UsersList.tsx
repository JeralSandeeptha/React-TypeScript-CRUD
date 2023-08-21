import React, { useState, useEffect } from 'react'
import '../styles/UsersList/UsersList.css';
import { Link } from 'react-router-dom';

type UsersListProps = {
    
}

const UsersList = (props: UsersListProps) => {

    const [contacts, setcontacts] = useState([
        {
            id: 1,
            name: 'Jeral Sandeeptha',
            subscription: '3',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        },
        {
            id: 2,
            name: 'Jeral Sandeeptha',
            subscription: '3',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        },
        {
            id: 3,
            name: 'Jeral Sandeeptha',
            subscription: '3',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        },
        {
            id: 4,
            name: 'Jeral Sandeeptha',
            subscription: '3',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        },
        {
            id: 5,
            name: 'Jeral Sandeeptha',
            subscription: '3',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        },
        {
            id: 6,
            name: 'Jeral Sandeeptha',
            subscription: '3',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        },
    ]);

    useEffect(() => {
      
    }, [])
    

    return (
        <div className='user-list-outer'>
            <div className="user-list-inner">
                {
                    contacts.map( (contact, index) => {
                        return (
                            <li key={index} className="box flex gap-x-6 py-5">
                                <Link to={`/users/${contact.id}`}>
                                    <div className="data flex min-w-0 gap-x-4">
                                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={contact.image} alt="user-img" />
                                        <div className="min-w-0 flex-auto">
                                            <p className="name text-sm font-semibold leading-6 text-gray-900">{contact.name}</p>
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-300">{contact.subscription} Months</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className='operations'>
                                    <Link to={`/updateuser/${contact.id}`}>
                                        <button className='update-btn'>Update</button>
                                    </Link>
                                    <button className='delete-btn'>Delete</button>
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