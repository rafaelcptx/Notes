import "./global.css";
import "./sidebar.css";

function App() {
  return (
    <div className="App">
      <aside>
        <h1>New Note</h1>
        <form action="">
          <div className="input-block">
            <label htmlFor="title">Title</label>
            <input type="text" />
          </div>
          <div className="input-block">
            <label htmlFor="note">Note</label>
            <textarea></textarea>
          </div>
          <button type="submit">Save</button>
        </form>
      </aside>
      <main></main>
    </div>
  );
}

export default App;
