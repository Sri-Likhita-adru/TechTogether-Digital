/* eslint-disable no-unused-vars */
import { useState } from 'react'
import JobImg from '../assets/job.svg'

export default function PostJobs() {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div>
            <div className='text-center text-6xl font-base text-white'>Post Jobs</div>

            <div className='md:grid md:grid-cols-2 items-center px-16 pb-8'>
                <div className=''>
                    <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                        <div className="h-2 bg-tertiary rounded-t-md"></div>
                        <div className="px-8 py-6 ">
                            <label className="block font-semibold"> Name </label>
                            <input type="text" placeholder="Name" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <label className="block mt-3 font-semibold"> Email </label>
                            <input type="email" placeholder="Email" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <label className="block mt-3 font-semibold"> Company Name </label>
                            <input type="text" placeholder="Company Name" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <label className="block mt-3 font-semibold"> Position hiring for </label>
                            <input type="text" placeholder="Position hiring for" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <label className="block mt-3 font-semibold"> Job description </label>
                            <textarea type="text" placeholder="Job description" className="border min-h-36 w-full px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <div className="flex justify-between items-baseline">
                                <button type="submit" className="mt-4 bg-tertiary text-white py-2 px-6 rounded-md">Post Job</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={JobImg} alt="img" width="422" height="422" />
                </div>
            </div>

        </div>
    )
}
