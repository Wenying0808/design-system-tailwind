import { NavBar } from "@/app/components/NavBar/NavBar";
import { SectionTitle } from "@/app/components/SectionTitle/SectionTitle";
import { IllustrationDescriptionBlock } from "@/app/components/IllustrationDescriptionBlock/IllustrationDescriptionBlock";
import { Footer } from "@/app/components/Footer/Footer";

export default function About() {
    const expertise = [
        {
            img: "/images/illu_expertise_research.svg",
            title: "User Research",
            description: "Perform explorative and evaluative studies to identify problems and verify concepts"
        },
        {
            img: "/images/illu_expertise_designIteration.svg",
            title: "Design & Prototyping",
            description: "Lead prototyping-based iterative design process to reduce cost of production"
        },
        {
            img: "/images/illu_expertise_development.svg",
            title: "Product Development",
            description: "Collaborate and deliver high-quality product efficiently"
        },
    ]
    const qualities = [
        {
            img: "/images/illu_iam_discover.svg",
            title: "Empathetic Discover",
        },
        {
            img: "/images/illu_iam_thinker.svg",
            title: "Systematic Thinker",
        },
        {
            img: "/images/illu_iam_collaborator.svg",
            title: "Adaptive Collaborator",
        },
        {
            img: "/images/illu_iam_communicator.svg",
            title: "Thoughtful Communicator",
        },
    ]
    
    return(
        <div className="flex flex-col">
            <NavBar/>
            <main className="flex flex-col place-items-center justify-center mt-page-top-s sm:mt-page-top-l">
                <div className="flex flex-col gap-section place-items-center w-full p-section bg-background-2">
                    <SectionTitle title="Expertise"/>
                    <div className="flex flex-wrap place-items-center justify-center gap-4 sm:gap-8">
                        {expertise.map(item => (
                            <IllustrationDescriptionBlock key={item.title} img={item.img} title={item.title} description={item.description}/>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-section place-items-center w-full p-section bg-background-3">
                        <SectionTitle title="I am"/>
                        <div className="flex flex-wrap place-items-center justify-center gap-4 sm:gap-8">
                            {qualities.map(item => (
                                <IllustrationDescriptionBlock key={item.title} img={item.img} title={item.title}/>
                            ))}
                        </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}