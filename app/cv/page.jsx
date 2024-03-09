import React from 'react';
import Image from 'next/image';

const CV = () => {
    return (

        <div className='mt-10 mb-10 w-full max-w-2x1 flex flex-col gap-7 glassmorphism'>
            <div className='flex justify-center items-center'>
                <header className="random_gradient text-center head_text">
                    <h1 className="font-bold">Sandro Monteiro</h1>

                    <Image src="/assets/images/sandro.jpg" width={150}
                        height={150} className="rounded-full" alt="profile" />
                    <h2 className="text-lg font-semibold">O tolo</h2>
                </header>
            </div>
            <section className="my-3 mx-4 glassmorphism">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p>Mobile: 911 945 500</p>
                <p>Email: sandro.rafael.sr7s@gmail.com</p>
                <p>LinkedIn: <a href="www.linkedin.com/">www.linkedin.com/</a></p>
                <p>GitHub: <a href="github.com/srkzz">github.com/srkzz</a></p>
            </section>

            <section className="my-3 mx-4 glassmorphism">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <ul>
                    <li>Spanish: Limited Working Proficiency</li>
                    <li>Portuguese: Native or Bilingual</li>
                    <li>Japanese: Limited Working Proficiency</li>
                    <li>English: Native or Bilingual</li>
                </ul>
            </section>

            <section className="my-3 mx-4 glassmorphism">
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>

            <section className="my-3 mx-4 glassmorphism">
                <h3 className="text-xl font-semibold mb-4">Programming Professional Experience</h3>
                <article className="mb-6">
                    <h4 className="text-lg font-semibold">Junior Developer</h4>
                    <p></p>
                    <p>Porto, Portugal</p>
                    <p></p>
                    <ul>
                        <li></li>
                    </ul>
                </article>

                {/* Other experience entries */}

            </section>

            <section className="my-3 mx-4 glassmorphism">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <article className="mb-6">
                    <h4 className="text-lg font-semibold"></h4>
                    <p></p>
                    <p></p>
                </article>

                {/* Other education entries */}

            </section>
        </div>
    );
};

export default CV;
