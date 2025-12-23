


export const Navbar = () => {
    return (
        <div className="fixed top-0 z-60 flex justify-between w-full h-[10vh] text-2xl uppercase text-primary px-32 bg-linear-to-b via-transparent from-secondary/50 to-transparent backdrop-blur-[1px]">
            <section className="w-1/3 h-full flex items-center">
                <h1 className="">JUAN B. CALVO</h1>
            </section>
            <section className="w-1/3 h-full flex items-center justify-around">
                <div>
                    <h1>contacto</h1>
                </div>
                <div>
                    <h1>MENU</h1>
                </div>
            </section>
        </div>
    )
}