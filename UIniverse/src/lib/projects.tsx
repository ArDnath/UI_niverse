import { 
    Calculator, 
  } from 'lucide-react';
import type { Project } from '@/types/types';
import CalculatorPage  from '@/projects/Calculator/CalculatorPage';
  
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
      }
      
    ];
  }