import { useState } from "react";
import { requestToGroqAI } from "./utils/groq";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  const handleSubmit = async () => {
    const ai = await requestToGroqAI(content.value);
    setData(ai);
  };

  return (
    <main className="flex flex-col min-h-[80vh] justify-center items-center">
      <h1 className="text-4xl text-indigo-500">React | Groq AI</h1>
      <form className="flex flex-col gap-4 py-4">
        <input
          className="py-2 px-4 text-md rounded-md"
          placeholder="ketik permintaan disini..."
          id="content"
          type="text"
        />
        <button
          className="bg-indigo-500 py-2 px-4 font-bold text-white rounded-md"
          onClick={handleSubmit}
          type="button"
        >
          Kirim
        </button>
      </form>
      <div className="text-white">{data}</div>
    </main>
  );
}

export default App;
