import React, { FormEvent, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Contact{
  name: string,
  subscription: string,
  image: string
}

type AddUserFormProps = {

}

const AddUserForm = (props: AddUserFormProps) => {

  const [name, setName] = useState('');
  const [subscription, setSubscription] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = { name, subscription, image };
      await axios.post('http://localhost:8000/api/contacts/', user)
      .then( () => {
          console.log(user);
          navigate('/');
        })
        .catch( (error) => {
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://i.pinimg.com/564x/97/21/05/972105c5a775f38cf33d3924aea053f1.jpg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add New Contact
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                  id="name"
                  name="name"
                  type="name"
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
                  id="image"
                  name="image"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="subscription" className="block text-sm font-medium leading-6 text-gray-900">
                  Subscription Duration
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={ (e) => {
                    console.log(e.target.value);
                    setSubscription(e.target.value);
                  }}
                  id="subscription"
                  name="subscription"
                  type="subscription"
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
                Create Contact
              </button>
            </div>
          </form>
        </div>
    </div>
  );

}

export default AddUserForm