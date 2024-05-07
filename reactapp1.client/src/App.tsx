import { useEffect, useState } from "react";
import { WeatherForecast } from "./swagger/api/index";
import "./App.css";
import JobAPI from "./api/job-api";

function App() {
  const [forecasts, setForecasts] = useState<WeatherForecast[]>();
  const jobAPI = new JobAPI();
  async function populateWeatherData() {
    const data = await jobAPI.populateWeatherData();
    setForecasts(data);
  }

  useEffect(() => {
    populateWeatherData();
  }, []);

  const contents =
    forecasts === undefined ? (
      <p>
        <em>
          Loading... Please refresh once the ASP.NET backend has started. See{" "}
          <a href="https://aka.ms/jspsintegrationreact">
            https://aka.ms/jspsintegrationreact
          </a>{" "}
          for more details.
        </em>
      </p>
    ) : (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={String(forecast.date)}>
              <td>{String(forecast.date)}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

  return (
    <div>
      <h1 id="tabelLabel">Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  );
}

export default App;
