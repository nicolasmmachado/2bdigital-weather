import * as C from "../AppStyle";

type Props = {
    display?: "none" | "flex";
    temperature?: number;
    Tmin?: number;
    Tmax?: number;
    city?: string;
    country?: string;
    sunrise?: string;
    sunset?: string;
    weather?: string;
    weatherIcon?: string;
    windDirection?: number;
    windSpeed?: number;
};

export const Weather = ({ display, temperature, Tmin, Tmax, city, country, sunrise, sunset, weather, weatherIcon, windDirection, windSpeed }: Props) => {




    return (
        <C.WeatherContainer display={display}>
            <div>
                <p>{city?.toUpperCase()}, {country}</p>
                <p>{weather?.toUpperCase()}</p>
                <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="Icone do Tempo" />
            </div>
            {(temperature && Tmin && Tmax) &&
                <div>
                    Temperatura atual {temperature.toFixed(0)}°C
                    <div>Mín {Tmin.toFixed(0)}°C / Máx {Tmax.toFixed(0)}°C</div>
                </div>
            }
            {(sunrise && sunset) &&
                <div>
                    <p>Nascer do Sol {sunrise} hrs / Pôr do Sol {sunset} hrs</p>
                </div>
            }
            {windDirection !==0 &&
                <div>Direção do vento {windDirection}°
                    <C.WindArea>
                        <C.WindDirection transform={windDirection}></C.WindDirection>
                    </C.WindArea>
                </div>
            }
            {windSpeed !== 0 &&
                <div>Velocidade do vento {windSpeed} m/s
                </div>
            }
        </C.WeatherContainer>

    )
}