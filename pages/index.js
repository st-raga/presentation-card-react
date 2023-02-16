import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Info from '@/components/Info'
import About from '@/components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Presentation Card</title>
        <meta name="description" content="Professional presentation card" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div id='main-content'>
          <div id='card-content'>
            <Info />
            <About />
          </div>
        </div>
      </main>
    </>
  )
}
