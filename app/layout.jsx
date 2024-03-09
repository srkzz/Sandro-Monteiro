import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Footer from '@components/Footer';
import Head from '@components/Head';

export const metadata = {
  title: "Sandro Monteiro",
  description: 'Site do Sandro'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='pt'>
      <Head>
        </Head> 
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>
            <Nav /> {children} <Footer />
          </main>
        </Provider>
      </body>
    </html>

  )
}

export default RootLayout;
