import { useNavigate } from "react-router";
import { usePageTransition } from "../../app/hooks/usePageTransition";



export const Navbar = () => {

    const { startTransition } = usePageTransition();
    const navigate = useNavigate();
    
    const handleClick = (link: string) => {
        startTransition(navigate, link);
    }

    
    return (
        <div className="fixed top-0 z-60 flex items-center justify-between w-full h-[10vh]  lg:text-2xl uppercase text-primary px-6 lg:px-32 bg-linear-to-b via-transparent from-secondary/50 to-transparent backdrop-blur-[1px]">
            <section className="w-1/2 lg:w-1/3 h-full flex items-center">
            <button onClick={() => handleClick("/")}>
                <h1 className="">JUAN B. CALVO</h1>
            </button>
            </section>
            <section className="w-1/2 lg:w-1/3 h-full flex items-center justify-end lg:justify-around">
                <div className="hidden lg:flex">
                    <h1>contacto</h1>
                </div>
                <div>
                    <h1>MENU</h1>
                </div>
            </section>
        </div>
    )
}