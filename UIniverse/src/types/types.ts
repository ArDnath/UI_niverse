export interface Project {
    id: string;
    name: string;
    icon:React.ElementType;
    description: string;
    component: React.ReactNode;
    concepts: string[];
    difficulty: 'beginner' | 'intermediate' | 'advanced';

}