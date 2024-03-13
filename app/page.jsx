'use client';
import Feed from "@components/Feed";
import Iconizar from "@components/Iconizar";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


const Home = () => {

      const [isHovered, setIsHovered] = useState(false);
    
    return (
                      <div className="justify-center items-center">
                        <section className="w-full flex-center flex-col mb-8">
                            <h1
                                className={`head_text text_center transition duration-300 ${isHovered ? 'text-red-700' : 'text-black'}`}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                Sandro Monteiro
                            </h1>
                        </section>
            
            <section className="w-full flex-center flex-col mb-8">
                
                    <div className="glassmorphism p-8 rounded-lg shadow-lg text-black text-center font-serif">
                        <h1 className="text-3xl mb-4">Welcome to My Website</h1>
                        <p className="text-lg mb-6">Explore my professional journey and skills. Click below to view my curriculum.</p>
                        <a href="/cv" className="inline-block hover:bg-gray-800 hover:text-white py-3 px-6 rounded-lg font-bold transition duration-300">Curriculum</a>
                    </div>
                
            </section>
        
            <section className="glassmorphism mb-8"> 
                <Iconizar />
            </section>
        </div>
    );
}

export default Home;
