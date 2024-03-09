import Link from 'next/link';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text_center">
                Sandro Monteiro
                <br className="max-md:hidden" />
                <Link href="/cv"><span className="junior_gradient text-center">Eletrônica, Desenho, Multimédia e Dança</span></Link>
            </h1>
                
        </section>
    )
}

export default Home;
