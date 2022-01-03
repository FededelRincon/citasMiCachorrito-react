
function Header() {
    return (
        <>
            <div className="bg-primary flex place-content-around border-b-4 rounded-md border-gray-100 mt-4">
                <div>
                    <p 
                        className="font-black text-gray-100 text-center text-2xl mt-3   sm:text-5xl sm:mt-8    md:text-6xl md:mt-10   lg:text-7xl"
                    >
                        Mi Cachorrito.com
                    </p>

                    <p
                        className="font-normal text-center text-gray-100 italic    sm:text-xl m-3    md:text-2xl   lg:text-3xl"
                    >
                        Donde mejor atendemos a tu mascota...
                    </p>
                </div>

                <div className="mt-2 sm:pt-8 ">
                    <img 
                        className="max-h-20   sm:max-h-24 mb-4   md:max-h-32   lg:max-h-36" 
                        src="./perro-silueta.webp" 
                        alt="logo" 
                    />
                </div>
            </div>
        </>
    )
}

export default Header;