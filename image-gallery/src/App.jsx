import { AiOutlineSearch } from 'react-icons/ai';
import { BsBookmarkCheck } from 'react-icons/bs';
import asset from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
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

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="relative group">
            <img src={asset} alt="first image" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 w-72 lg:w-[17.2rem] md:w-[11.1rem]">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstact Painting</p>
                  <p className="text-xs">245 Likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <BsBookmarkCheck />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src={image2} alt="first image" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 w-72 lg:w-[17.2rem] md:w-[11.1rem]">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstact Painting</p>
                  <p className="text-xs">245 Likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <BsBookmarkCheck />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src={image3} alt="first image" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 w-72 lg:w-[17.2rem] md:w-[11.1rem]">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstact Painting</p>
                  <p className="text-xs">245 Likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <BsBookmarkCheck />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src={image4} alt="first image" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 w-72 lg:w-[17.2rem] md:w-[11.1rem]">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstact Painting</p>
                  <p className="text-xs">245 Likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <BsBookmarkCheck />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src={image5} alt="first image" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 w-72 lg:w-[17.2rem] md:w-[11.1rem]">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstact Painting</p>
                  <p className="text-xs">245 Likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <BsBookmarkCheck />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src={image6} alt="first image" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 w-72 lg:w-[17.2rem] md:w-[11.1rem]">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstact Painting</p>
                  <p className="text-xs">245 Likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <BsBookmarkCheck />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
