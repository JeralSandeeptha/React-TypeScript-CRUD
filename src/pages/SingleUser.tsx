import React, { useEffect, useState } from 'react'
import '../styles/SingleUser/SingleUser.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Contact{
  _id: number,
  name: string,
  subscription: string,
  image: string
}

const SingleUser = () => {

  const [user, setUser] = useState<Contact>();

  const params = useParams();

  const { id } = params;

  const fetchContact = async () => {
    try {
        const res = await axios.get(`http://localhost:8000/api/contacts/${id}`);
        console.log(res.data);
        setUser(res.data);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect( () => {
    fetchContact();
  }, [])

  return (
    <div className='single-outer'>
      <div className="single-inner">
        {
          user ? (
            <li className="box flex gap-x-6 py-5">
                <div className="data flex min-w-0 gap-x-4">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={user!.image} alt="user-img" />
                    <div className="min-w-0 flex-auto">
                        <p className="name text-sm font-semibold leading-6 text-gray-900">{ user!.name }</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-300">{ user!.subscription } Months</p>
                    </div>
                </div>
            </li>
          ) : (
            <h1>Please wait...</h1>
          )
        }
      </div>
    </div>
  )
}

export default SingleUser