import { useState } from "react";
import axios from "axios";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const generate = async () => {
    try {
      const res = await axios.post("http://localhost:5000/generate", { prompt });
      setResult(res.data.text);
    } catch (err) {
      setResult("Error connecting to AI server");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>AI Blog Generator</h2>

      <textarea
        rows="6"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter blog topic..."
        style={{ width: "100%" }}
      />

      <br /><br />

      <button onClick={generate}>Generate</button>

      <p style={{ marginTop: 20 }}>{result}</p>
    </div>
  );
}

export default App;
