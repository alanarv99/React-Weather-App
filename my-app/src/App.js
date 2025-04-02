import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>"Weather" it's Rain or Shine</h1>

      <Weather />
      <footer>
        <h6>
          This application is{" "}
          <a
            href="https://github.com/alanarv99/React-Weather-App"
            target="_blank"
          >
            open-sourced
          </a>{" "}
          on Github!
        </h6>
      </footer>
    </div>
  );
}

export default App;
