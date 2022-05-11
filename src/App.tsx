import * as C from "./AppStyle";
import "./App.css";
import { Search } from "./Components/Search";

function App() {

  const findWeather = async (city: string) => {
    try {
        
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

        if(json.cod === 200){
            
        }
        else{
            alert(`Cidade não encontrada, favor checar o nome.`)
        }

    }
    catch (error) {
        alert(`Ocorreu o erro ${error}.`);
    }
}

  return (
    <div>
      <C.Main>
        <Search exFunction={findWeather}/>        
      </C.Main>
    </div>
  );
}

export default App;
