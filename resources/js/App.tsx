import { useState, useEffect } from "react";
import TravelImage from "../../public/images/link_travel.png";
import PhotographyImage from "../../public/images/link_photography.png";
import WorkImage from "../../public/images/link_work.png";
import CounterImage from "../../public/images/background_counter.png";

const App = () => {
    const [screen, setScreen] = useState(window.innerWidth < 768);
    useEffect(() => {
        function handleResize() {
            setScreen(window.innerWidth < 768);
        }
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    console.log(screen);
    return (
        <div className="bg-[#f9f9f9] p-3">
            <div id="Hero">
                {/* <div
                    className="flex h-[100px] justify-around gap-12 text-white md:h-[550px]"
                    style={{
                        backgroundImage: `url(${HeroBackgroundIamge})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                    }}
                ></div> */}
                <img
                    alt="background"
                    src="./images/background_hero.png"
                    className="w-full"
                />
                <div className="absolute top-10 flex w-full items-center justify-center gap-8 text-white">
                    <div className="hidden  space-x-6 md:block">
                        <span className="text-[20px] font-bold">ABOUT US</span>
                        <span className="text-[20px] font-bold">EQUIPMENT</span>
                        <span className="text-[20px] font-bold">BLOG</span>
                    </div>
                    <img
                        alt="logo"
                        src="./images/logo.png"
                        className=" mx-24 h-[110px] w-[120px] px-4"
                    />
                    <div className="hidden  space-x-6 md:block">
                        <span className="text-[20px] font-bold">PORTFOLIO</span>
                        <span className="text-[20px] font-bold">OUR WORK</span>
                        <span className="text-[20px] font-bold">CONTACT</span>
                    </div>
                </div>
                <div className="mt-[14px] grid grid-cols-1 gap-10 px-5 md:mt-[-74px] md:grid-cols-3 md:px-40">
                    <div className="space-y-4  bg-white p-3 pb-5 text-center">
                        <img src="./images/header_1.png" className="w-full" />
                        <div>
                            <p className="text-3 font-bold text-[#373737]">
                                OUR JOURNEY
                            </p>
                            <p className="text-3 font-medium text-[#9E9E9E]">
                                JUL 18, 2023
                            </p>
                        </div>
                    </div>
                    <div className=" space-y-4 bg-white p-3 pb-7 text-center">
                        <img src="./images/header_2.png" className="w-full" />
                        <div>
                            <p className="text-3 font-bold text-[#373737]">
                                SIGHTSEEING IN SAN DIEGO
                            </p>
                            <p className="text-3 font-medium text-[#9E9E9E]">
                                AUG 23, 2023
                            </p>
                        </div>
                    </div>
                    <div className=" space-y-4 bg-white p-3 pb-7 text-center">
                        <img src="./images/header_3.png" className="w-full" />
                        <div>
                            <p className="text-3 font-bold text-[#373737]">
                                BEST PHOTO SPOTS, USA
                            </p>
                            <p className="text-3 font-medium text-[#9E9E9E]">
                                OCT 03, 2023
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-16">
                    <button className="text-4 border-2 border-[#C0653B] px-6 py-2 font-bold text-[#C0653B]    ">
                        READ MORE
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:gap-36">
                <div
                    id="about_us"
                    className="grid grid-cols-1 justify-between gap-0 px-5  md:grid-cols-2 md:gap-12 md:px-[120px]"
                    // className="grid grid-cols-2 justify-between gap-0 px-5 md:grid-cols-2 md:gap-[116px] md:px-[120px]"
                >
                    <img
                        alt="about_us"
                        src="./images/about_us.png"
                        className="h-[250px] w-full md:h-[400px]"
                    />
                    <div className="flex flex-col justify-between md:py-8">
                        <div className="flex text-[32px] font-bold text-[#373737] md:text-[40px]">
                            ABOUT&nbsp;
                            <p className="underline decoration-[#C0653B]">US</p>
                        </div>
                        <span className="text-[18px] font-normal">
                            Profitieren Sie von unserer langjährigen Erfahrung
                            als Messefotografen in Hannover und ganz
                            Deutschland. Von der klassischen Standfotografie,
                            über Produktfotografie, bis hin zu Presseevents, der
                            Begleitung von Delegationen und
                            Messeveranstaltungen.
                        </span>
                        <button className="text-4 mt-5 w-[155px] border-2 border-[#C0653B] px-6 py-2 font-bold text-[#C0653B] md:mt-0    ">
                            READ MORE
                        </button>
                    </div>
                </div>
                {screen ? (
                    <div
                        id="our_gear"
                        className="mt-5 flex flex-col-reverse gap-0 px-5 md:mt-0 md:justify-between md:gap-12"
                    >
                        <div className="flex flex-col justify-between md:py-8">
                            <div className=" flex text-[32px] font-bold text-[#373737] md:text-[40px]">
                                OUR&nbsp;
                                <p className="underline decoration-[#C0653B]">
                                    GEAR
                                </p>
                            </div>
                            <span className="text-[18px] font-normal">
                                Profitieren Sie von unserer langjährigen
                                Erfahrung als Messefotografen in Hannover und
                                ganz Deutschland. Von der klassischen
                                Standfotografie, über Produktfotografie, bis hin
                                zu Presseevents, der Begleitung von Delegationen
                                und Messeveranstaltungen.
                            </span>
                            <button className="text-4 mt-5 w-[155px] border-2 border-[#C0653B] px-6 py-2 font-bold text-[#C0653B] md:mt-0    ">
                                READ MORE
                            </button>
                        </div>
                        <img
                            alt="about_us"
                            src="./images/about_us.png"
                            className="h-[250px] w-full md:h-[400px]"
                        />
                    </div>
                ) : (
                    <div
                        id="our_gear"
                        className="mt-5 grid grid-cols-1 gap-0 px-5 md:mt-0 md:grid-cols-2 md:justify-between md:gap-12 md:px-[120px]"
                    >
                        <div className="flex flex-col justify-between md:py-8">
                            <div className=" flex text-[32px] font-bold text-[#373737] md:text-[40px]">
                                OUR&nbsp;
                                <p className="underline decoration-[#C0653B]">
                                    GEAR
                                </p>
                            </div>
                            <span className="text-[18px] font-normal">
                                Profitieren Sie von unserer langjährigen
                                Erfahrung als Messefotografen in Hannover und
                                ganz Deutschland. Von der klassischen
                                Standfotografie, über Produktfotografie, bis hin
                                zu Presseevents, der Begleitung von Delegationen
                                und Messeveranstaltungen.
                            </span>
                            <button className="text-4 mt-5 w-[155px] border-2 border-[#C0653B] px-6 py-2 font-bold text-[#C0653B] md:mt-0    ">
                                READ MORE
                            </button>
                        </div>
                        <img
                            alt="about_us"
                            src="./images/about_us.png"
                            className="h-[250px] w-full md:h-[400px]"
                        />
                    </div>
                )}
            </div>
            <div id="counter" className="my-[100px]">
                <div
                    style={{
                        backgroundImage: `url(${CounterImage})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        // height: "280px",
                    }}
                    className="  grid grid-cols-1 gap-5 bg-slate-700 py-5 text-white md:grid-cols-3 md:py-[70px]"
                >
                    <div className="flex flex-col items-center gap-3">
                        <img
                            alt="couter"
                            src="./images/counter.png"
                            className="h-[65px] w-[65px]"
                        />
                        <p className="text-[28px] font-bold md:text-[50px]">
                            3.200
                        </p>
                        <p className="text-5 font-bold">
                            Kilometer mit dem Fahrrad
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <img
                            alt="couter"
                            src="./images/counter.png"
                            className="h-[65px] w-[65px]"
                        />
                        <p className="text-[28px] font-bold md:text-[50px]">
                            SAN DIEGO
                        </p>
                        <p className="text-5 font-bold">Aktuell in</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <img
                            alt="couter"
                            src="./images/counter.png"
                            className="h-[65px] w-[65px]"
                        />
                        <p className="text-[28px] font-bold md:text-[50px]">
                            365
                        </p>
                        <p className="text-5 font-bold">Tage unterwegs</p>
                    </div>
                </div>
                {/* <div className="absolute inset-x-0 flex h-[30px] w-[255px] justify-center rounded-t-lg bg-[#D39376]">
                    Aktualisiert am 23.08.2023
                </div> */}
            </div>
            <div className="grid grid-cols-1 md:gap-36">
                <div
                    id="our_work"
                    className="grid grid-cols-1 justify-between gap-0 px-5  md:grid-cols-2 md:gap-12 md:px-[120px]"
                    // className="grid grid-cols-2 justify-between gap-0 px-5 md:grid-cols-2 md:gap-[116px] md:px-[120px]"
                >
                    <img
                        alt="our_work"
                        src="./images/about_us.png"
                        className="h-[250px] w-full md:h-[400px]"
                    />
                    <div className="flex flex-col justify-between md:py-8">
                        <div className="flex text-[32px] font-bold text-[#373737] md:text-[40px]">
                            Our&nbsp;
                            <p className="underline decoration-[#C0653B]">
                                Work
                            </p>
                        </div>
                        <span className="text-[18px] font-normal">
                            Profitieren Sie von unserer langjährigen Erfahrung
                            als Messefotografen in Hannover und ganz
                            Deutschland. Von der klassischen Standfotografie,
                            über Produktfotografie, bis hin zu Presseevents, der
                            Begleitung von Delegationen und
                            Messeveranstaltungen.
                        </span>
                        <button className="text-4 mt-5 w-[155px] border-2 border-[#C0653B] px-6 py-2 font-bold text-[#C0653B] md:mt-0    ">
                            READ MORE
                        </button>
                    </div>
                </div>
                {screen ? (
                    <div
                        id="our_gear"
                        className="mt-5 flex flex-col-reverse gap-0 px-5 md:mt-0 md:justify-between md:gap-12"
                    >
                        <div className="flex flex-col justify-between md:py-8">
                            <div className=" flex text-[32px] font-bold text-[#373737] md:text-[40px]">
                                OUR&nbsp;
                                <p className="underline decoration-[#C0653B]">
                                    Portfolio
                                </p>
                            </div>
                            <span className="text-[18px] font-normal">
                                Profitieren Sie von unserer langjährigen
                                Erfahrung als Messefotografen in Hannover und
                                ganz Deutschland. Von der klassischen
                                Standfotografie, über Produktfotografie, bis hin
                                zu Presseevents, der Begleitung von Delegationen
                                und Messeveranstaltungen.
                            </span>
                            <button className="text-4 mt-5 w-[155px] border-2 border-[#C0653B] px-6 py-2 font-bold text-[#C0653B] md:mt-0    ">
                                READ MORE
                            </button>
                        </div>
                        <img
                            alt="about_us"
                            src="./images/about_us.png"
                            className="h-[250px] w-full md:h-[400px]"
                        />
                    </div>
                ) : (
                    <div
                        id="our_gear"
                        className="mt-5 grid grid-cols-1 gap-0 px-5 md:mt-0 md:grid-cols-2 md:justify-between md:gap-12 md:px-[120px]"
                    >
                        <div className="flex flex-col justify-between md:py-8">
                            <div className=" flex text-[32px] font-bold text-[#373737] md:text-[40px]">
                                OUR&nbsp;
                                <p className="underline decoration-[#C0653B]">
                                    Portfolio
                                </p>
                            </div>
                            <span className="text-[18px] font-normal">
                                Profitieren Sie von unserer langjährigen
                                Erfahrung als Messefotografen in Hannover und
                                ganz Deutschland. Von der klassischen
                                Standfotografie, über Produktfotografie, bis hin
                                zu Presseevents, der Begleitung von Delegationen
                                und Messeveranstaltungen.
                            </span>
                            <button className="text-4 mt-5 w-[155px] border-2 border-[#C0653B] px-6 py-2 font-bold text-[#C0653B] md:mt-0    ">
                                READ MORE
                            </button>
                        </div>
                        <img
                            alt="about_us"
                            src="./images/about_us.png"
                            className="h-[250px] w-full md:h-[400px]"
                        />
                    </div>
                )}
            </div>
            <div
                id="link_box"
                className=" mt-4 flex flex-col items-center justify-between gap-10 px-12 text-white md:mt-32 md:flex-row"
            >
                <div
                    style={{
                        backgroundImage: `url(${TravelImage})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "280px",
                    }}
                    className=" flex w-[350px] items-center justify-center bg-black text-[24px] font-bold uppercase opacity-[20px] md:w-[400px]"
                >
                    travel
                </div>
                <div
                    style={{
                        backgroundImage: `url(${PhotographyImage})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "280px",
                    }}
                    className=" flex w-[350px] items-center justify-center bg-black text-[24px] font-bold uppercase opacity-[20px] md:w-[400px]"
                >
                    PHOTOGRAPHY
                </div>
                <div
                    style={{
                        backgroundImage: `url(${WorkImage})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "280px",
                    }}
                    className=" flex w-[350px] items-center justify-center bg-black text-[24px] font-bold uppercase opacity-[20px] md:w-[400px]"
                >
                    WORK
                </div>
            </div>
            <div id="logo" className="my-11 bg-black opacity-[90%]">
                <img
                    alt="logo"
                    src="./images/logo_background.png"
                    className="mx-auto w-full"
                />
            </div>
            <div
                id="feed"
                // className="grid grid-cols-2 justify-center gap-5 px-5 md:grid-cols-2 lg:grid-cols-4"
            >
                <div className="flex justify-center ">
                    <div className=" mb-10 flex whitespace-nowrap text-[17px] font-bold text-[#373737] md:text-[40px]">
                        FOLLOW OUR&nbsp;
                        <p className="underline decoration-[#C0653B]">
                            JOURNEY
                        </p>
                        &nbsp;ON INSTAGRAM
                    </div>
                </div>
                <div className="grid grid-cols-2 justify-center gap-5 px-5 md:grid-cols-2 lg:grid-cols-4">
                    <img
                        alt="feed_1"
                        src="./images/feed_1.png"
                        className="mx-auto"
                    />
                    <img
                        alt="feed_2"
                        src="./images/feed_2.png"
                        className="mx-auto"
                    />
                    <img
                        alt="feed_3"
                        src="./images/feed_3.png"
                        className="mx-auto"
                    />
                    <img
                        alt="feed_4"
                        src="./images/feed_4.png"
                        className="mx-auto"
                    />
                </div>
            </div>
            <div
                id="footer"
                className="mt-14 flex h-[200px] w-full items-center justify-center gap-3 bg-[#373737] text-center text-white md:gap-16"
            >
                <span>IMPRESSUM</span>
                <span>DATENSCHUTZ</span>
                <span>AGBS</span>
            </div>
        </div>
    );
};

export default App;
