import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);

  const handleSearch = async () => {
    // Mock data — replace with real API if needed
    const mockWeather = {
      temp: 31,
      condition: 'Clear Sky',
      icon: 'https://cdn.weatherapi.com/weather/64x64/day/113.png',
    };
    setWeather(mockWeather);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-white text-center">

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6"
        >
          ☁️ WeatherScope
        </motion.h1>

        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex gap-3 items-center justify-center mb-8"
        >
          <input
            type="text"
            placeholder="Search city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="px-5 py-3 rounded-xl text-black outline-none w-2/3 bg-white shadow-lg placeholder-gray-500 focus:ring-4 focus:ring-pink-300"
          />
          <button
            onClick={handleSearch}
            className="bg-white text-indigo-700 px-4 py-3 font-bold rounded-xl hover:bg-indigo-100 transition-all duration-300"
          >
            Search
          </button>
        </motion.div>

        <AnimatePresence>
          {weather && (
            <motion.div
              key="weather-box"
              initial={{ y: 20, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl"
            >
              <img
                src={weather.icon}
                alt="weather icon"
                className="mx-auto mb-4 w-16 h-16"
              />
              <h2 className="text-3xl font-semibold mb-1">{weather.condition}</h2>
              <p className="text-2xl font-light">{weather.temp}°C</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
