import { SparklesText } from "@/components/ui/sparkles-text";
import { GridBackground } from "@/components/ui/Grid";
import CTX from "@/components/CTX";

const HomePage = () => {
    return (
        <div className='max-w-7xl mx-auto '>
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
                    <div>
                        <CTX />
                    </div>
                </div>
            </GridBackground>
        </div>
    );
}

export default HomePage;