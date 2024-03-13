import React from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import CountryFlag from 'react-country-flag';

const CV = () => {
    return (
        <div className='mt-10 mb-10 w-full max-w-2x1 flex flex-col gap-7 glassmorphism'>
            <div className='flex justify-center items-center'>
                <header className="random_gradient text-center head_text">
                    <h1 className="font-bold">Sandro Monteiro</h1>
                    <div className="flex justify-center items-center">
                        <Image src="/assets/images/sandro.jpg" width={150} height={150} className="rounded-full" />
                    </div>
                    <h2 className="text-lg font-semibold">Curriculum</h2>
                </header>
            </div>
            <section className="my-3 mx-4 glassmorphism">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="flex items-center mb-2">
                    <FaPhone className="mr-2" />
                    <p>Mobile: +351  911 945 500</p>
                </div>
                <div className="flex items-center mb-2">
                    <FaEnvelope className="mr-2" />
                    <p>Email: sandro.rafael.sr7s@gmail.com</p>
                </div>
                <div className="flex items-center mb-2">
                    <FaLinkedin className="mr-2" />
                    <p> <a href="www.linkedin.com/">LinkedIn: O teu linkedin</a></p>
                </div>
            </section>

            <section className="my-3 mx-4 glassmorphism">
                <h3 className="text-xl font-semibold mb-4"><MdLanguage className="mr-2" />Languages</h3>
                <ul>
                    <li><CountryFlag countryCode="PT" className="mr-2" />Portuguese: Native or Bilingual</li>
                    <li><CountryFlag countryCode="SP" className="mr-2" />Spanish: Limited Working Proficiency</li>
                    <li><CountryFlag countryCode="JP" className="mr-2" />Japanese: Limited Working Proficiency</li>
                    <li><CountryFlag countryCode="GB" className="mr-2" />English: Native or Bilingual</li>
                </ul>
            </section>

            <section className="my-3 mx-4 glassmorphism">
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <ul>
                    <li>Commercial English (IEFP, January 2021 - August 2021)</li>
                    <li>TVDE Driving</li>
                    <li>Programmer Level 4 - EISNT + IEFP </li>
                </ul>
            </section>

            <section className="my-3 mx-4 glassmorphism">
                <h3 className="text-xl font-semibold mb-4">------------</h3>
                <article className="mb-6">
                    <h4 className="text-lg font-semibold">------------</h4>
                    <p>------------</p>
                    <p>Porto, Portugal</p>
                    <p>------------</p>
                    <ul>
                        <li>------------</li>
                    </ul>
                </article>

                {/* Other experience entries */}

            </section>

            <section className="my-3 mx-4 glassmorphism">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <article className="mb-6">
                    <h4 className="text-lg font-semibold">------------</h4>
                    <p>------------</p>
                    <p>February 2022 - May 2023</p>
                </article>

                {/* Other education entries */}

            </section>
        </div>
    );
};

export default CV;
