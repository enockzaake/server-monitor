import LoginForm from "@/components/login";

const LoginPage = () => {
  return (
    <div className="flex justify-center h-screen bg-gray-800 pt-24">
      <div className=" ">
        <div className="text-center bg-gray-900 p-12 rounded shadow">
          <h1 className="mt-6 text-2xl font-bold text-gray-300 sm:text-3xl md:text-4xl">
            UpEngine Login
          </h1>

          <p className="mt-4 leading-relaxed text-gray-200">
            Login and start seamless & realtime server monitoring.
          </p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
