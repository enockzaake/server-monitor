import RegisterForm from "@/components/register";

const RegisterUser = () => {
  return (
    <div className="flex justify-center h-screen bg-gray-800">
      <div className="p-4 ">
        <div className="text-center p-12 bg-gray-900 rounded-lg shadow-md ">
          <h1 className="mt-6 text-2xl font-bold text-gray-200 sm:text-3xl md:text-4xl">
            UpEngine Registration
          </h1>
          <p className="mt-4 leading-relaxed text-gray-200">
            Signup and start seamless & realtime server monitoring.
          </p>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
