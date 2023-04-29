/* eslint-disable no-unused-vars */
import React from 'react'
import ProfileImg from "../assets/profileimg.png"

export default function Profile() {
    return (
        <div>
            <div className='text-center text-6xl font-base text-white'>My Profile</div>

            <div className='py-4 px-36'>
                {/* <div className='flex py-4 px-36'>
                    <img src={ProfileImg} alt="profile" className='w-36 h-36 bg-white rounded-full' />
                </div> */}
                <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                    <div className="h-2 bg-tertiary rounded-t-md"></div>
                    <div className="px-8 py-6 ">
                        <label className="block font-semibold"> Name </label>
                        <input type="text" placeholder="Name" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                        <label className="block mt-3 font-semibold"> Email </label>
                        <input type="email" placeholder="Email" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                        <label className="block mt-3 font-semibold"> Skills </label>
                        <input type="text" placeholder="Skills" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                        <label className="block mt-3 font-semibold"> Position looking for </label>
                        <input type="text" placeholder="Position looking for" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                        <label className="block mt-3 font-semibold"> Choose Resume </label>
                        <input type="file" className="w-full px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                        <div className="flex justify-between items-baseline">
                            <button type="submit" className="mt-4 bg-tertiary text-white py-2 px-6 rounded-md">Update</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
