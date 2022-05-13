import * as C from "./AppStyle";
import "./App.css";
import { useState, useEffect } from "react";
import { Search } from "./Components/Search";
import { Weather } from "./Components/Weather";

function App() {

  const [display, setDisplay] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState<number>();
  const [Tmin, setTmin] = useState<number>();
  const [Tmax, setTmax] = useState<number>();
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [weather, setWeather] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [windDirection, setWindDirection] = useState<number>();
  const [windSpeed, setWindSpeed] = useState<number>();
  const [loading, setLoading] = useState(false);

  const findWeather = async (city: string) => {
    if (city === "") {
      setDisplay("none");
    }
    else {
      try {
        setLoading(true);

        let json;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
            'X-RapidAPI-Key': '8ec57cd5b1mshc73091d3a2b8cb8p1ed162jsnd22e20bf42e1'
          }
        };

        let response = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&lang=pt_br&units=metric`, options)
        json = await response.json();
        console.log(json);

        if (json.cod === 200) {
          setLoading(false);
          setDisplay("flex");

          setTemperature(json.main.temp);
          setTmin(json.main.temp_min);
          setTmax(json.main.temp_max);
          setCity(json.name);
          setCountry(json.sys.country);

          let dateRise = new Date(json.sys.sunrise * 1000);
          let hoursRise = dateRise.getHours();
          let minutesRise = dateRise.getMinutes();
          let secondsRise = dateRise.getSeconds();
          setSunrise(`${hoursRise}:${minutesRise}:${secondsRise}`);

          let dateSet = new Date(json.sys.sunset * 1000);
          let hoursSet = dateSet.getHours();
          let minutesSet = dateSet.getMinutes();
          let secondsSet = dateSet.getSeconds();
          setSunset(`${hoursSet}:${minutesSet}:${secondsSet}`);
          setWeather(json.weather[0].description);
          setWeatherIcon(json.weather[0].icon);
          setWindDirection(json.wind.deg);
          setWindSpeed(json.wind.speed);
        }
        else {
          setLoading(false);
          alert(`Cidade não encontrada, favor checar o nome.`)
        }

      }
      catch (error) {
        setLoading(false);
        alert(`Ocorreu o erro ${error}.`);
      }
    }
  }



  return (
    <div>
      <C.Main>
        <Search exFunction={findWeather} />
        {loading &&
          <C.Loading>Carregando...</C.Loading>
        }
        {display === "flex" &&
          <Weather display={display} temperature={temperature} Tmin={Tmin} Tmax={Tmax} city={city} country={country} sunrise={sunrise} sunset={sunset} weather={weather} weatherIcon={weatherIcon} windDirection={windDirection} windSpeed={windSpeed} />
        }
      </C.Main>
    </div>
  );
}

export default App;
