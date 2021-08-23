import Navbar from "./Navbar";
import Head from 'next/head'

export default function Layout({children}){
    return(
        <div className='font-raleway'>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />

            <main>
                {children}
            </main>

        </div>
    )
}