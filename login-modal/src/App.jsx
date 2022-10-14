function App() {
  return (
    <div className="bg-rose-200 min-h-screen flex justify-center items-center">
      <div className="bg-white relative flex flex-col m-6 space-y-10 shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        {/* left side */}
        <div className="p-6 md:p-20">
          <h1 className="text-start text-4xl font-bold">Log In</h1>
          <p className="mt-4 text-lg text-gray-400">
            Login to your account to upload and download Pictures,
            <br /> Videos and Music.
          </p>
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
