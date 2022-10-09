import img from './images/headphone.png';

function App() {
  return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center">
      {/* main card */}
      <div className="rounded-lg bg-white flex flex-col lg:flex-row ">
        {/* image side */}
        <div className="flex px-10 py-12 lg:h-[30rem] lg:items-start items-center justify-center">
          <img src={img} alt="headphone" className="h-44 rounded-lg" />
        </div>

        {/* content side */}
        <div className="flex flex-col my-12 justify-center lg:items-start items-center ">
          <button className="bg-black text-white px-2 py-1 rounded-2xl">
            Free Shipping
          </button>
          <p className="text-2xl w-3/4 mt-4">
            Razer Kraken Kitty Edt Gaming Headset Quartz
          </p>
          <div className="mt-10">
            <p className="line-through">$700</p>
            <p className="font-bold text-4xl">$599</p>
            <p className="text-gray-400 mt-2 text-sm">
              This offer is valid until April 3 or as long as offer lasts!
            </p>
          </div>
          <button className="bg-blue-500 my-6 px-28 py-3 rounded-md border-b-8 border-b-blue-600">
            Add To Cart
          </button>
          <div className="">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full hover:animate-ping"></div>
              <p className="">50+ pics in Stock</p>
            </div>
            <div className="flex gap-8 mt-6">
              <button className="border-2 py-2 px-4 rounded-lg hover:bg-gray-400">
                Add To Card
              </button>
              <button className="border-2 py-2 px-4 rounded-lg hover:bg-gray-400">
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
