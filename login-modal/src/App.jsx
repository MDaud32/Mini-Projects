import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
function App() {
  return (
    <div className="bg-rose-200 min-h-screen flex justify-center items-center">
      <div className="bg-white relative flex flex-col m-6 space-y-10 shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        {/* left side */}
        <div className="p-6 md:p-20 md:w-[36rem] w-full mx-auto">
          <h1 className="text-start text-4xl font-bold">Log In</h1>
          <p className="mt-4 text-md text-gray-400 md:text-lg">
            Login to your account to upload and download Pictures, Videos and
            Music.
          </p>
          <div className="space-y-10 items-center justify-center flex ">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full border-2 py-6 text-xl rounded-md border-gray-300 mt-10"
            />
          </div>
          <div className="flex justify-between mt-10">
            <button className="rounded-xl">Forgot Password</button>
            <button className="rounded-xl bg-blue-400 px-7 py-5">Next</button>
          </div>
          <div className="w-full border-b border-gray-400 mt-4"></div>
          <p className="text-sm text-center text-gray-400 mt-2">login with</p>
          <div className="flex justify-around mt-4">
            <button className="px-7 py-4 rounded-xl border-2 flex flex-row items-center gap-4">
              <FaFacebookF className="text-3xl text-blue-600" />
              Facebook
            </button>
            <button className="px-8 py-4 rounded-xl border-2 flex flex-row items-center gap-4">
              <FcGoogle className="text-3xl" />
              Google
            </button>
          </div>
        </div>
        {/* right side */}
        <img
          src="https://images.unsplash.com/photo-1562016600-ece13e8ba570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
          alt="signin background"
          className="w-[430px] hidden md:block"
        />
      </div>
    </div>
  );
}
export default App;
