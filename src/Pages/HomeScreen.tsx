import UpdateHeroSection from "../modules/home/components/HeroSection/HeroSection2"
import { ProjectsSection } from "../modules/home/components/Seccion Proyectos/ProjectsSection"

export const HomeScreen = () => {
    return (
        <div className="text-primary flex flex-col h-auto w-full">
           <UpdateHeroSection />
            {/* <InfiniteLogos /> */}
            <div className="h-screen"></div>
           <ProjectsSection />
            <div className="h-screen"></div>
        </div>
    )
}