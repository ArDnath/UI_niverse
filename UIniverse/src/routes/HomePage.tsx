import { SparklesText } from "@/components/ui/sparkles-text";
import { GridBackground } from "@/components/ui/Grid";

const HomePage = () => {
    return (
        <div className=''>
            <GridBackground>
                <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
                    <section className='w-full py-16 sm:py-24'>
                        <div className='max-w-3xl mx-auto text-center'>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                                <span className="">Welcome to </span>
                                <SparklesText className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight mb-6">
                                    <span className="font-extrabold">UI</span>
                                    <span>_niverse</span>
                                </SparklesText>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
                                This is a resource for students to find inspiration and reference frontend projects
                                helping them master the art of frontend development through practice.
                            </p>
                </div>
            </section>
            <button className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-xl text-base sm:text-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
              Let's Get Started
            </button>
        </div>
            

            </GridBackground>
            
        </div>
    );
}

export default HomePage;
