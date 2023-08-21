import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'; 

interface Contact{
  name: string,
  subscription: string,
  image: string
}

const UpdateUserForm = () => {

  const [name, setName] = useState('');
  const [subscription, setSubscription] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();
  const params = useParams();

  const { id } = params;

  const fetchContact = async () => {
    try {
        const res = await axios.get(`http://localhost:8000/api/contacts/${id}`);
        console.log(res.data);
        const fetchedUser = res.data;
        setName(fetchedUser.name);
        setSubscription(fetchedUser.subscription);
        setImage(fetchedUser.image);
    } catch (error) {
        console.log(error);
    }
  }

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedUser = {
      name,
      subscription,
      image,
    };
    try {
      await axios.put(`http://localhost:8000/api/contacts/${id}`, updatedUser)
        .then( () => {
          alert('User updated successfully');
          navigate('/');
        })
        .catch( (error) => {
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect( () => {
    fetchContact();
  }, [])

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://i.pinimg.com/564x/97/21/05/972105c5a775f38cf33d3924aea053f1.jpg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Update Contact
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleUpdate}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  onChange={ (e) => {
                    console.log(e.target.value);
                    setName(e.target.value);
                  }}
                  value={name}
                  placeholder='Enter your name'
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                User Image
              </label>
              <div className="mt-2">
                <input
                  onChange={ (e) => {
                    console.log(e.target.value);
                    setImage(e.target.value);
                  }}
                  value={image}
                  placeholder='Enter your image URL'
                  id="image"
                  name="image"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="subscription" className="block text-sm font-medium leading-6 text-gray-900">
                  Subsscription Duration
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={ (e) => {
                    console.log(e.target.value);
                    setSubscription(e.target.value);
                  }}
                  value={subscription}
                  placeholder='Enter your subscription months'
                  id="subscription"
                  name="subscription"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update Contact
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default UpdateUserForm