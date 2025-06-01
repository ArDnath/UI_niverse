import { useState, useEffect } from "react";
import axios from "axios";

interface WeatherData {
  name: string;
  sys: { country: string };
  main: { temp: number; feels_like: number; humidity: number; pressure?: number };
  weather: { description: string; icon?: string }[];
  wind: { speed: number };
  visibility?: number;
  rain?: { '1h'?: number };
}

const WeatherApp = () => {
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      },
      (error) => {
        console.log("Error getting location", error.message);
        alert("Please allow location access to get weather data.");
      }
    );
    console.log("Latitude:", lat, "Longitude:", long);
  }, []);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_WEATHER_API_URL}`,
        {
          params: {
            lat: lat,
            lon: long,
            units: "metric",
            appid: import.meta.env.VITE_APP_WEATHER_API_KEY,
          },
        }
      );
      const result = response.data;
      setData(result);
      console.log("Weather Data:", result);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (lat !== null && long !== null) {
      fetchWeatherData();
    }
  }, [lat, long]);

  const formattedDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-3">
          <div className="h-4 bg-white/20 rounded w-32"></div>
          <div className="h-8 bg-white/20 rounded w-20"></div>
          <div className="h-3 bg-white/20 rounded w-24"></div>
        </div>
        <div className="w-16 h-16 bg-white/20 rounded-full"></div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="text-center space-y-2">
            <div className="h-3 bg-white/20 rounded w-full"></div>
            <div className="h-4 bg-white/20 rounded w-3/4 mx-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 p-4 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 w-full max-w-md shadow-2xl">
        <div className="text-center mb-6">
          <h1 className="text-white text-xl font-light mb-1">
            {formattedDate(new Date())}
          </h1>
          <p className="text-white/70 text-sm">{formatTime(new Date())}</p>
        </div>

        {loading ? (
          <LoadingSkeleton />
        ) : error ? (
          <div className="text-center py-8">
            <div className="text-white/90 mb-2">⚠️</div>
            <p className="text-white/80 text-sm">{error}</p>
            <button
              onClick={fetchWeatherData}
              className="mt-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : data ? (
          <>
            <div className="flex justify-between items-start mb-8">
              <div className="flex-1">
                <div className="text-white/80 text-sm mb-1 flex items-center">
                  📍 {data.name}, {data.sys.country}
                </div>
                <div className="text-white text-5xl font-light mb-2">
                  {Math.round(data.main.temp)}°
                </div>
                <div className="text-white/70 text-sm capitalize">
                  {data.weather[0].description}
                </div>
              </div>
              <div className="flex flex-col items-center">
                {data.weather[0].icon ? (
                  <img
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt={data.weather[0].description}
                    className="w-16 h-16 drop-shadow-lg"
                  />
                ) : (
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">☀️</span>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-white/70 text-xs mb-1">FEELS LIKE</div>
                <div className="text-white font-semibold text-lg">
                  {Math.round(data.main.feels_like)}°
                </div>
              </div>
              <div className="text-center bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-white/70 text-xs mb-1">HUMIDITY</div>
                <div className="text-white font-semibold text-lg">
                  {data.main.humidity}%
                </div>
              </div>
              <div className="text-center bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-white/70 text-xs mb-1">WIND</div>
                <div className="text-white font-semibold text-lg">
                  {data.wind.speed} m/s
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {data.main.pressure && (
                <div className="bg-white/5 rounded-xl p-3 text-center">
                  <div className="text-white/60 text-xs mb-1">PRESSURE</div>
                  <div className="text-white text-sm font-medium">
                    {data.main.pressure} hPa
                  </div>
                </div>
              )}
              {data.visibility && (
                <div className="bg-white/5 rounded-xl p-3 text-center">
                  <div className="text-white/60 text-xs mb-1">VISIBILITY</div>
                  <div className="text-white text-sm font-medium">
                    {(data.visibility / 1000).toFixed(1)} km
                  </div>
                </div>
              )}
            </div>

            {data.rain && data.rain["1h"] && (
              <div className="mt-4 bg-blue-500/20 rounded-xl p-3 text-center">
                <div className="text-white/70 text-xs mb-1">
                  RAIN (LAST HOUR)
                </div>
                <div className="text-white text-sm font-medium">
                  {data.rain["1h"]} mm
                </div>
              </div>
            )}

            <button
              onClick={fetchWeatherData}
              className="w-full mt-6 bg-white/20 hover:bg-white/30 text-white py-3 rounded-xl text-sm font-medium transition-all duration-200 backdrop-blur-sm border border-white/20"
            >
              🔄 Refresh Weather
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default WeatherApp;