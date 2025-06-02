import { 
    Calculator,
    Sun ,
    Clock,
    ListTodo
  } from 'lucide-react';
import type { Project } from '@/types/types';
import CalculatorPage  from '@/projects/Calculator/CalculatorPage';
import Weather from '@/projects/WeatherApp/Weather';
import Stopwatch from '@/projects/stopwatch/Stopwatch';
import Todo from '@/projects/Todo/Todo';
  
  export function getAllProjects(): Project[] {
    return [
      {
        id: "calculator",
        name: "Calculator",
        description: "A simple calculator for basic arithmetic operations",
        icon: Calculator,
        component: <CalculatorPage />,
        concepts: [
          "State management with useState",
          "Event handling",
          "Functional components",
          "Mathematical operations in JavaScript",
          "Conditional rendering",
        ],
        difficulty: "beginner",
      },
      {
        id: "weather-app",
        name: "Weather App",
        description:
          "A sleek weather app that fetches real-time weather data based on location or city input",
        icon: Sun,
        component: <Weather />,
        concepts: [
          "Fetching data from REST APIs",
          "Using useEffect and useState hooks",
          "Handling async/await in React",
          "Conditional rendering based on loading/error state",
          "Parsing and displaying dynamic JSON data",
          "User input and form handling",
        ],
        difficulty: "beginner",
      },
      {
        id: "stopwatch",
        name: "Stopwatch",
        description:
          "A responsive stopwatch with start, pause, and reset functionality",
        icon: Clock, // Make sure to import a Clock icon or use one from your icon library
        component: <Stopwatch />,
        concepts: [
          "State management with useState",
          "Using useEffect and useRef for intervals",
          "Time formatting in JavaScript",
          "Event handling and dynamic UI updates",
          "Functional components in React",
          "Conditional rendering based on state",
        ],
        difficulty: "beginner",
      },
      {
        id: "todo-app",
        name: "ToDo App",
        description:
          "A clean and interactive ToDo list app with task adding, completion, and deletion features",
        icon: ListTodo, // Make sure to import a ListTodo icon or use one from your icon library
        component: <Todo />,
        concepts: [
          "State management with useState",
          "Dynamic rendering with map()",
          "Event handling for form inputs",
          "Conditional rendering and styling",
          "Functional components in React",
          "List key management and user interaction",
        ],
        difficulty: "beginner",
      },
    ];
  }