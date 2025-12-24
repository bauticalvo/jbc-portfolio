import { HeroSection } from "../modules/home/components/HeroSection/HeroSection"
import { InfiniteLogos } from "../modules/home/components/HeroSection/LogoCarousel"
import { ProjectsSection } from "../modules/home/components/Seccion Proyectos/ProjectsSection"

export const HomeScreen = () => {
    return (
        <div className="text-primary flex flex-col h-auto w-full">
           <HeroSection />
            {/* <InfiniteLogos /> */}
            <div className="h-screen"></div>
           <ProjectsSection />
            <div className="h-screen"></div>
        </div>
    )
}