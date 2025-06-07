import { Link } from 'react-router-dom';

const CTX = () => {
    return (
        <div>
            <Link to="/projects">
            <button className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-xl text-base sm:text-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
              Let's Get Started
            </button>
            </Link>
            
        </div>
    );
};

export default CTX;
