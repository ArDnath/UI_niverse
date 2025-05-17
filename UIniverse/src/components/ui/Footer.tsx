

const Footer = () => {
    return (
        <footer className='w-full lg:mt-10'>
            <div className='mx-auto max-w-4xl px-6 py-4 text-center border-t-2 border-gray-600'>
                <div className="text-lg lg:text-xl ">
                © {new Date().getFullYear()} Ariyaman Debnath. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
