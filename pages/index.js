import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
    // Ref
    const workRef = useRef();
    const aboutRef = useRef();
    const textOne = useRef();
    const textTwo = useRef();
    const textThree = useRef();
    const textFour = useRef();

    // Handling Scroll
    const handleWorkScroll = () => {
        window.scrollTo({
            top: workRef.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    const handleAboutScroll = () => {
        window.scrollTo({
            top: aboutRef.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    useIsomorphicLayoutEffect(() => {
        stagger(
            [
                textOne.current,
                textTwo.current,
                textThree.current,
                textFour.current,
            ],
            { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
            { y: 0, x: 0, transform: "scale(1)" }
        );
    }, []);

    return (
        <div
            className={`relative ${
                data.showCursor && "cursor-none"
            } bg-gradient-to-b from-blue-100 to-red-50 min-h-screen`}
        >
            {data.showCursor && <Cursor />}
            <Head>
                <title>{data.name}</title>
            </Head>
            <Socials className="mt-2 laptop:mt-5" />
            <div className="absolute inset-0 gradient-circle"></div>
            <div className="absolute bottom-0 left-0 right-0 gradient-circle-bottom"></div>

            <div className="container mx-auto max-w-screen-xl flex flex-col justify-center items-center px-4 py-8">
                <Header
                    handleWorkScroll={handleWorkScroll}
                    handleAboutScroll={handleAboutScroll}
                />

                <div className="laptop:mt-20 mt-10 flex-1 w-full">
                    <div className="mt-5 w-full">
                        <h1
                            ref={textOne}
                            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-bold w-full"
                        >
                            {data.headerTaglineOne}
                        </h1>
                        <h2
                            ref={textTwo}
                            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-bold w-full"
                        >
                            {data.headerTaglineTwo}
                        </h2>
                        <h3
                            ref={textThree}
                            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-bold w-full"
                        >
                            {data.headerTaglineThree}
                        </h3>
                    </div>
                </div>
            </div>

            <div className="30 p-2 laptop:p-0" ref={workRef}>
                <div className="container mx-auto max-w-screen-xl">
                    <h2 className="text-7xl font-bold">Travaux</h2>
                    <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-10">
                        {data.projects.map((project) => (
                            <WorkCard
                                key={project.id}
                                img={project.imageSrc}
                                name={project.title}
                                description={project.description}
                                onClick={() => window.open(project.url)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-10 laptop:mt-40 p-2 laptop:p-0">
                <div className="container mx-auto max-w-screen-xl">
                    <h2 className="tablet:m-10 text-7xl font-bold">Services</h2>
                    <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
                        {data.services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                name={service.title}
                                percentage={service.percentage}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* This button should not go into production */}
            {process.env.NODE_ENV === "development" && (
                <div className="fixed bottom-5 right-5">
                    <Link href="/edit">
                        <Button type="primary">Modifier</Button>
                    </Link>
                </div>
            )}

            <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
                <div className="container mx-auto max-w-screen-xl grid grid-cols-1 laptop:grid-cols-10 gap-6">
                    <div className="laptop:col-span-7">
                        <h2 className="tablet:m-10 text-7xl font-bold">
                            À propos
                        </h2>
                        <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl">
                            {data.aboutpara}
                        </p>
                    </div>
                    <div className="laptop:col-span-3 flex justify-center items-center">
                        <img
                            src="/images/anaelp.jpg"
                            alt="Auteur du portfolio"
                            className="w-full h-auto laptop:max-w-full"
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
