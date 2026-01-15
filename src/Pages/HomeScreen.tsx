import { HeroLayout } from "../modules/home/components/HeroSection/HeroLayout"
import UpdateHeroSection from "../modules/home/components/HeroSection/HeroSection2"
import NewProjectsSection from "../modules/home/components/Seccion Proyectos/NewProjectsSection"

export const HomeScreen = () => {
    return (
        <div className="text-primary flex flex-col h-auto w-full">
            <HeroLayout />
            <div className="h-screen"></div>
            <NewProjectsSection />
           {/* <ProjectsSection /> */}
            <div className="h-screen"></div>
        </div>
    )
}