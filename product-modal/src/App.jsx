import img from './images/headphone.png';

function App() {
  return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center">
      {/* main card */}
      <div className="w-6/12 m-h-[70%] rounded-lg bg-white flex flex-col md:flex-row  ">
        {/* image side */}
        <div className="px-10 py-12 h-[30rem]">
          <img src={img} alt="headphone" className="h-44 rounded-lg" />
        </div>

        {/* content side */}
        <div className="my-12">
          <p className="bg-black text-white px-2 py-1 rounded-2xl">
            Free Shipping
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
