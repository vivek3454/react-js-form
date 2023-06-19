import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const handleForm = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <div className="fixed bottom-16 right-14 max-[768px]:right-10 w-16 h-14 bg-slate-800 transition-colors hover:bg-[#0EA5E9] text-white grid place-items-center text-xl rounded-full cursor-pointer" onClick={handleForm}><i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-message'}`}></i>
      </div>
      <div className={`text-white rounded overflow-hidden bg-[#4F5866] w-[320px] absolute bottom-32 right-36 max-[460px]:right-[5%] ${isOpen ? 'block' : 'hidden'}`}>
        <form className="w-full h-full rounded-xl">
          <p className="bg-[#0EA5E9] text-center text-[22px] font-semibold py-3">Feedback</p>
          <div className="pt-10 pb-5 flex flex-col items-center gap-5 font-semibold">
            <div className="w-72 h-14">
              <input type="email" className="w-full h-full outline-none transition-colors hover:border-white focus:border-[#0EA5E9] border border-gray-500 rounded-md px-4 bg-transparent" placeholder="Email address (Optional)" />
            </div>
            <div className="w-72 h-28">
              <textarea className="w-full h-full resize-none outline-none transition-colors hover:border-white focus:border-[#0EA5E9] border border-gray-500 rounded-md px-4 pt-4 bg-transparent" placeholder="Your feedback goes here!" required
                autocomplete="off"></textarea>
            </div>
            <div className="w-full flex justify-between px-4">
              <button type="button" className="border border-[#0EA5E9] px-5 py-2 rounded text-[#0EA5E9] hover:bg-[rgba(14,164,233,0.1)]">BACK</button>
              <button type="button" className="bg-[#0EA5E9] px-5 py-2 rounded hover:bg-[#4cb7ff]">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
