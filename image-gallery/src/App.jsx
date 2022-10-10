import { AiOutlineSearch } from 'react-icons/ai';
function App() {
  return (
    <div className="flex items-center justify-center bg-cyan-50 min-h-screen">
      <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
        {/* menu container */}
        <div className="flex items-center align-middle justify-center md:justify-end md:mb-24 space-x-4 md:flex-row flex-col">
          {/* menu items */}
          <div className="group">
            <a href="#">Vector</a>
            <div className="menu-item"></div>
          </div>
          <div className="group">
            <a href="#">Illustration</a>
            <div className="menu-item"></div>
          </div>
          <div className="group">
            <a href="#">Images</a>
            <div className="menu-item"></div>
          </div>
          <div className="group">
            <a href="#">Icons</a>
            <div className="menu-item"></div>
          </div>
        </div>
        {/* search container */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="">
            <input
              type="text"
              placeholder="Enter Text"
              className="border-b-2 md:w-80 focus:outline-none"
            />
            <button className="text-3xl text-gray-400 -ml-6">
              <AiOutlineSearch />
            </button>
          </div>
          <button className="border-2 flex flex-col md:flex-row rounded-lg bg-black hover:bg-white text-white px-16 md:px-6 py-2 hover:text-black">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
