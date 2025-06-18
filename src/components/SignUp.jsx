import React from 'react'

export default function SignUp() {
  return (
    <div className="flex items-center justify-center px-2">
    
      <form className="w-full max-w-lg bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className='text-amber-500'>Register Now</h2>
        <div className="relative z-0 w-full m-3 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-amber-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-amber-500"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-amber-600 dark:text-gray-400 dark:peer-focus:text-amber-500"
          >
            Email address
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-amber-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-amber-500"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-amber-600 dark:text-gray-400 dark:peer-focus:text-amber-500"
          >
            Password
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-amber-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-amber-500"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-amber-600 dark:text-gray-400 dark:peer-focus:text-amber-500"
          >
            Confirm password
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-amber-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-amber-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-amber-600 dark:text-gray-400 dark:peer-focus:text-amber-500"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-amber-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-amber-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-amber-600 dark:text-gray-400 dark:peer-focus:text-amber-500"
            >
              Last name
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="floating_phone"
              id="floating_phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-amber-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-amber-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-amber-600 dark:text-gray-400 dark:peer-focus:text-amber-500"
            >
              Phone number (123-456-7890)
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-amber-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-amber-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_company"
              className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-amber-600 dark:text-gray-400 dark:peer-focus:text-amber-500"
            >
              Company (Ex. Google)
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-amber-700 px-5 py-2.5 text-center center text-sm font-medium text-white hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
