import { SparklesText } from "@/components/ui/sparkles-text";
import { GridBackground } from "@/components/ui/Grid";

const HomePage = () => {
    return (
        <div className=''>
            <GridBackground>
                <div className="flex flex-col items-center">
                <section className='w-full mt-16 py-24'>
                <div className='max-w-4xl mx-auto px-6 text-center'>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                        <span className="">Welcome to </span>
                        <span className="">Welcome to </span>
                        <SparklesText>
                            <span className="font-extrabold">UI</span>
                            <span>_niverse</span>
                        </SparklesText>

                    </h1>
                    <p className="text-base md:text-lg text-gray-600 ">
                        This is a resource for students to find inspiration and reference frontend projects
                        helping them master the art of frontend development through practice.
                    </p>
                </div>
            </section>

            <div>
                <button className='bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition-transform transform hover:scale-105'>
                    Lets Get Started
                </button>
            </div>
                </div>
            

            </GridBackground>
            
        </div>
    );
}

export default HomePage;
