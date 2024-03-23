import React from "react";

const LoginForm = () => {
  return (
    <form className="grid grid-cols-6 gap-6 text-start">
      <div className="col-span-6">
        <label
          htmlFor="Email"
          className="block text-sm font-medium text-gray-200"
        >
          {" "}
          Email{" "}
        </label>

        <input
          type="email"
          id="Email"
          name="email"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-200 shadow-sm"
        />
      </div>

      <div className="col-span-6">
        <label
          htmlFor="Password"
          className="block text-sm font-medium text-gray-200"
        >
          {" "}
          Password{" "}
        </label>

        <input
          type="password"
          id="Password"
          name="password"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-200 shadow-sm"
        />
      </div>

      <div className="flex flex-col col-span-6 sm:flex sm:items-center sm:gap-4">
        <button className="inline-block w-full shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
          Log In
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Dont have an account?
          <a href="/register" className="text-gray-200 underline">
            Register here
          </a>
          .
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
