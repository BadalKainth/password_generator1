import vector from "./assets/Vector.png";
import "./App.css";

function App() {
  return (
    <main>
      <h4 className="main-header">Password Generator</h4>
      <div className="code-gen">
        <p>Generated pass here</p>
        <img src={vector} alt="logo" />
      </div>
      <div className="bottom-section">
        <div className="length">
          <p>Character Length</p>
          <p>Counter: 0</p>
        </div>
        <div className="options">
          <label className="option">
            <input type="checkbox" /> Include Uppercase Letters
          </label>
          <label className="option">
            <input type="checkbox" /> Include Lowercase Letters
          </label>
          <label className="option">
            <input type="checkbox" />
            Include Numbers
          </label>
          <label className="option">
            <input type="checkbox" /> Include Symbols
          </label>
          <div className="strengthbox">
            <p>STRENGTH</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
