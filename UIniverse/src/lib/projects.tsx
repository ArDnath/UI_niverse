import { 
    Calculator,
    Sun 
  } from 'lucide-react';
import type { Project } from '@/types/types';
import CalculatorPage  from '@/projects/Calculator/CalculatorPage';
import Weather from '@/projects/WeatherApp/Weather';
  
  export function getAllProjects(): Project[] {
    return [
      {
        id: 'calculator',
        name: 'Calculator',
        description: 'A simple calculator for basic arithmetic operations',
        icon: Calculator,
        component:<CalculatorPage />,
        concepts: [
          'State management with useState',
          'Event handling',
          'Functional components',
          'Mathematical operations in JavaScript',
          'Conditional rendering'
        ],
        difficulty: 'beginner'
      },
      {
        id: 'weather-app',
        name: 'Weather App',
        description: 'A sleek weather app that fetches real-time weather data based on location or city input',
        icon: Sun,
        component: <Weather />,
        concepts: [
          'Fetching data from REST APIs',
          'Using useEffect and useState hooks',
          'Handling async/await in React',
          'Conditional rendering based on loading/error state',
          'Parsing and displaying dynamic JSON data',
          'User input and form handling'
        ],
        difficulty: 'beginner'
      }
      
    ];
  }