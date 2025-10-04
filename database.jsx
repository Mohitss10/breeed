// app/breeds/page.jsx
"use client";

import React from "react";
import Sidebar from "./components/Sidebar";
import BreedCard from "./components/BreedCard";
import { breedsData } from "../../../util/data";
import SpeciesSection from "./components/SpeciesSection";


export default function BreedsPage() {
    return (
        <div className=" font-display text-content-light h-[100vh] pt-10">
            <div className="flex flex-col">
                {/* Content */}
                <div className="">
                    <div className="container  px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row gap-2 pt-7">
                            {/* Sidebar */}
                            <Sidebar />

                            {/* Main Content */}
                            <div className="bg-white  rounded-2xl shadow-2xl">
                               <main className="flex-grow rounded-sm h-[83vh] overflow-y-auto p-2 mt-2">
                                {Object.keys(breedsData).map((species, idx) => (
                                    <SpeciesSection key={idx} title={species} breeds={breedsData[species]} />
                                ))}
                            </main> 
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
