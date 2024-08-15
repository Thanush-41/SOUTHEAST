"use client";

import { useState } from 'react';
import Sidebar from "./Sidebar";
import Head from "./Head";
import { podcast } from "./Data";
import Scrooler from "./Scrooler";

// Dummy MusicPlayer component, replace with your actual music player implementation
const MusicPlayer = ({ audioSrc, onClose }) => (
    <div className="music-player">
        <audio controls src={audioSrc} autoPlay />
        <button onClick={onClose}>Close</button>
    </div>
);

export default function Music() {
    const [selectedAudio, setSelectedAudio] = useState(null);

    const handleElementClick = (audioSrc) => {
        setSelectedAudio(audioSrc);
    };

    const handleClosePlayer = () => {
        setSelectedAudio(null);
    };

    return (
        <>
            <div className="w-full h-max lg:px-[50px] px-[20px] lg:mt-[100px] mt-[100px] pb-[20px] bg-[#FFFFFF]">
                <div className="flex lg:gap-[100px] md:gap-[20px]">
                    <div className="basis-1/5"><Sidebar /></div>

                    <div className="basis-4/5 lg:ml-[50px] ml-[120px]">
                        <Head />

                        <div className="mt-[150px]">
                            {podcast.map((Element, index) => (
                                <div key={index} className="mb-[80px]">
                                    <div className="text-[25px] text-[#000000] font-Klee font-medium mb-[20px]">
                                        {Element.head}
                                    </div>
                                    <Scrooler 
                                        data={Element.data} 
                                        onElementClick={handleElementClick}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {selectedAudio && (
                <MusicPlayer audioSrc={selectedAudio} onClose={handleClosePlayer} />
            )}
        </>
    );
}
