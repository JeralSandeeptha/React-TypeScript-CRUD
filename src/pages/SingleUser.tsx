import React from 'react'
import '../styles/SingleUser/SingleUser.css';

const SingleUser = () => {
  return (
    <div className='single-outer'>
      <div className="single-inner">
        <li className="box flex gap-x-6 py-5">
            <div className="data flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src='https://media.istockphoto.com/id/1214292694/photo/beautiful-transsexual-transgender-woman-wearing-t-shirt-over-isolated-red-background-looking.jpg?s=612x612&w=0&k=20&c=P5vkwzWHhxDDppy3elLXJrDXVdic_A1_HxxlxYEKhiA=' alt="user-img" />
                <div className="min-w-0 flex-auto">
                    <p className="name text-sm font-semibold leading-6 text-gray-900">Jeral Sandeeptha</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-300">3 Months</p>
                </div>
            </div>
        </li>
      </div>
    </div>
  )
}

export default SingleUser