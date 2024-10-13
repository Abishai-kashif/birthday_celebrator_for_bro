"use client";

import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import Image from "next/image";
import React from "react";
import { photos } from "@/data";
import { motion } from "framer-motion";
import { useState } from "react";
import BalloonButton from "@/components/BalloonButton";
import usePlaySound from "@/hooks/usePlaySound";
import useConfetti from "@/hooks/useConfetti";

const Page = () => {
    const [isPopped, setIsPopped] = useState(false);
    const { fireConfetti } = useConfetti();

    const popSound = usePlaySound("/media/sounds/balloon-pop.mp3");
    const birthdaySound = usePlaySound("/media/sounds/birthday_song.mp3");

    return (
        <main className="h-screen w-screen bg-slate-950 text-sky-200 overflow-hidden">
            <div
                className={`w-full h-full flex flex-col items-center justify-center gap-5 ${
                    isPopped ? "hidden" : "block"
                }`}
            >
                <BalloonButton
                    callback={() => {
                        popSound();
                        setIsPopped(true);
                        fireConfetti();
                        birthdaySound();
                    }}
                />

                <motion.div
                    className="text-5xl md:text-4xl text-bold absolute md:relative"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.2 }}
                    transition={{
                        duration: 2,
                        delay: 1,
                        repeat: Infinity,

                        ease: "easeInOut",
                    }}
                >
                    Pop the balloon!
                </motion.div>
            </div>
            <div
                className={`relative w-full h-full flex items-center justify-center ${
                    isPopped ? "block" : "hidden"
                }`}
            >
                {/* <Confetti  /> */}
                <div className="absolute z-10">
                    <Image
                        src={"/hero_balloon.png"}
                        alt="background image"
                        height={"700"}
                        width={"500"}
                    />
                </div>

                <div className="absolute top-10">
                    <InfiniteMovingCards
                        items={photos.map((photo, idx) => (
                            <Image
                                src={photo}
                                alt={"photo_" + (idx + 1)}
                                width={100}
                                height={100}
                                className="p-1 border-2 border-slate-700"
                            />
                        ))}
                        direction="right"
                        speed="slow"
                        pauseOnHover={false}
                    />
                </div>

                <div className="text-xl font-semibold leading-relaxed mt-14 text-right flex flex-col tracking-wide z-20">
                    <h1 className="text-base uppercase">Happy Birthday</h1>
                    <div className="text-5xl italic text-sky-50">
                        Abnir Kashif
                    </div>
                </div>

                <div className="absolute bottom-0">
                    <InfiniteMovingCards
                        items={photos.map((photo, idx) => (
                            <Image
                                src={photo}
                                alt={"photo_" + (idx + 1)}
                                width={100}
                                height={100}
                                className="p-1 border-2 border-slate-700"
                            />
                        ))}
                        speed="slow"
                        pauseOnHover={false}
                    />
                </div>
            </div>
        </main>
    );
};

export default Page;
