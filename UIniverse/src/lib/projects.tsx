import {
  Calculator,
  Sun,
  Clock,
  ListTodo,
  Paintbrush,
  ShieldCheck,
  DollarSign,
  QrCode,
  DicesIcon,
  Quote,
  Activity
} from "lucide-react";
import type { Project } from '@/types/types';
import CalculatorPage  from '@/projects/Calculator/CalculatorPage';
import Weather from '@/projects/WeatherApp/Weather';
import Stopwatch from '@/projects/stopwatch/Stopwatch';
import Todo from '@/projects/Todo/Todo';
import ColorSwitch from '@/projects/ColorSwitcher/ColorSwitch';
import PasswordChecker from '@/projects/PasswordChecker/PasswordChecker';
import Tipcalculator from "@/projects/tip-calculator/Tipcalculator";
import QRGenerator from "@/projects/QRGenerator/QRgenerator";
import DiceRoller from "@/projects/Dice/rollDice";
import QuoteGenerator from "@/projects/QuoteGenerator/QuoteGenerator";
import BMICalculator from "@/projects/BMICalculator/BMICalculator";

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
        id: "bg-color-changer",
        name: "Background Color Changer",
        description:
          "A fun and interactive app that lets users dynamically change the background color of the page with a click or input.",
        icon: Paintbrush, // Replace with an appropriate icon from your icon library
        component: <ColorSwitch />,
        concepts: [
          "Managing UI state with useState",
          "Handling user input in React",
          "Inline and dynamic styling in JSX",
          "Event handling in React",
          "Creating reusable components",
          "Simple form controls and color validation",
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
        id: "password-checker",
        name: "Password Strength Checker",
        description:
          "A responsive password strength checker that evaluates and displays password security levels in real time",
        icon: ShieldCheck, // Replace with an appropriate icon from your library (e.g., lucide-react's ShieldCheck)
        component: <PasswordChecker />,
        concepts: [
          "Real-time input handling with useState",
          "String pattern matching with RegEx",
          "Conditional logic for strength evaluation",
          "Dynamic UI updates based on input",
          "Creating interactive form components",
          "Basic UX considerations in security prompts",
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
      {
        id: "tip-calculator",
        name: "Tip Calculator",
        description: "Calculate tip amounts and split bills among multiple people",
        icon: DollarSign,
        component: <Tipcalculator />,
        concepts: [
          "Form handling with multiple inputs",
          "Real-time calculations with useState",
          "Number formatting and currency display",
          "Input validation",
          "Dynamic UI updates based on calculations"
        ],
        difficulty: "beginner"
      },
      {
        id: "qr-generator",
        name: "QR Code Generator",
        description: "Generate QR codes from text or URLs with download option",
        icon: QrCode,
        component: <QRGenerator />,
        concepts: [
          "Using third-party libraries (qrcode.react)",
          "Text input handling",
          "Canvas or SVG rendering",
          "Download functionality",
          "URL validation"
        ],
        difficulty: "beginner"
      },
      {
        id: "dice-roller",
        name: "Dice Roller",
        description:
          "Roll virtual dice with animations and customizable number of dice",
        icon: DicesIcon,
        component: <DiceRoller />,
        concepts: [
          "Random number generation",
          "Animation with CSS or Framer Motion",
          "Array state management",
          "Button event handling",
          "Visual dice face rendering",
        ],
        difficulty: "beginner",
      }
      ,
      {
        id: "quote-generator",
        name: "Random Quote Generator",
        description: "Display inspirational quotes with a click, featuring copy and share options",
        icon: Quote,
        component: <QuoteGenerator />,
        concepts: [
          "Working with arrays of data",
          "Random selection logic",
          "Clipboard API integration",
          "Event handling",
          "Simple animations with CSS/Framer Motion"
        ],
        difficulty: "beginner"
      },
      {
        id: "bmi-calculator",
        name: "BMI Calculator",
        description: "Calculate Body Mass Index with health category indicators and visual feedback",
        icon: Activity,
        component: <BMICalculator />,
        concepts: [
          "Form input handling",
          "Mathematical calculations",
          "Conditional rendering for health categories",
          "Unit conversion (kg/lbs, cm/ft)",
          "Visual feedback with color-coded results"
        ],
        difficulty: "beginner"
      }
      
      
      
    ];
  }