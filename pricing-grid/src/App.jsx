import { BiCheck } from 'react-icons/bi';
function App() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-28 bg-slate-800 text-white">
      <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
        {/* first card */}
        <div className="border-8 p-8 mx-3 rounded-xl bg-slate-700 border-slate-500 hover:border-violet-700">
          <div>
            <h3 className="font-semibold text-2xl text-center uppercase">
              Basic
            </h3>
            <h1 className="text-5xl mt-10 text-center font-serif">100GB</h1>
            <p className="text-center mt-2">$1.99/month</p>
            <div className="flex justify-center mt-4">
              <button className="border-2 rounded-lg border-slate-500 px-3 py-2 hover:bg-violet-700 hover:border-violet-700">
                Purchase
              </button>
            </div>
          </div>
          <div className="border-t border-slate-400 mt-16 mb-3"></div>
          <div className="">
            <p className="flex flex-row items-center">
              <BiCheck />
              100 GB Storage
            </p>
            <p className="flex flex-row items-center">
              <BiCheck /> Options to add members
            </p>
            <p className="flex flex-row items-center">
              <BiCheck /> Extra member benifits
            </p>
          </div>
        </div>
        {/* 2nd card */}
        <div className="border-8 mx-3 mt-3 p-8 rounded-xl bg-slate-700 border-violet-700">
          <div>
            <h3 className="text-center uppercase text-2xl font-semibold">
              Standard
            </h3>
            <h1 className="text-center font-serif mt-10 text-5xl">200GB</h1>
            <p className="text-center mt-2">$3.99/month</p>
            <div className="flex justify-center mt-4">
              <button className="border-2 border-slate-500 rounded-lg px-3 py-2 hover:bg-violet-700 hover:border-violet-700 bg-violet-600">
                Purchase
              </button>
            </div>
          </div>
          <div className="border-t border-slate-400 mt-16 mb-3"></div>
          <div className="">
            <p className="flex flex-row items-center">
              <BiCheck />
              200 GB Storage
            </p>
            <p className="flex flex-row items-center">
              <BiCheck /> Options to add members
            </p>
            <p className="flex flex-row items-center">
              <BiCheck /> Extra member benifits
            </p>
          </div>
        </div>
        {/* 3rd card */}
        <div className="border-8 mx-3 mt-3 p-8 rounded-xl bg-slate-700 border-slate-500 hover:border-violet-700">
          <div>
            <h3 className="text-2xl font-semibold uppercase text-center">
              Premium
            </h3>
            <h1 className="text-5xl uppercase font-serif mt-10 text-center">
              2TB
            </h1>
            <p className="text-center mt-2">$8.99/month</p>
            <div className="flex justify-center mt-3">
              <button className="border-2 border-slate-500 rounded-lg px-3 py-2 hover:bg-violet-700 hover:border-violet-700">
                Purchase
              </button>
            </div>
          </div>
          <div className="border-t border-slate-400 mt-16 mb-3"></div>
          <div className="">
            <p className="flex flex-row items-center">
              <BiCheck />2 TB Storage
            </p>
            <p className="flex flex-row items-center">
              <BiCheck /> Options to add members
            </p>
            <p className="flex flex-row items-center">
              <BiCheck /> Extra member benifits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
