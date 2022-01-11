import { WeatherProvider } from "./context/weather/WeatherContext"

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <h1>Hello</h1>
      </div>
    </WeatherProvider>
  );
}

export default App;
