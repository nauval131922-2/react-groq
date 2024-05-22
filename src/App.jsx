import { useState } from "react";
import { requestToGroqAI } from "./utils/groq";
import { Light as SyntaxHighLight } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const ai = await requestToGroqAI(content.value);
    setData(ai);
  };

  return (
    <main className="flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto">
      <h1 className="text-4xl text-indigo-500">React | Groq</h1>
      <form className="flex flex-col gap-4 py-4 w-full" onSubmit={handleSubmit}>
        <input
          className="py-2 px-4 text-md rounded-md"
          placeholder="ketik permintaan disini..."
          id="content"
          type="text"
        />
        <button
          className="bg-indigo-500 py-2 px-4 font-bold text-white rounded-md"
          type="submit"
        >
          Kirim
        </button>
      </form>
      <div className="max-w-xl w-full mx-auto">
        {data ? (
          <SyntaxHighLight
            languange="swift"
            style={darcula}
            wrapLongLines={true}
          >
            {data}
          </SyntaxHighLight>
        ) : null}
      </div>
    </main>
  );
}

export default App;
