import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '../components/banner';
import Image from 'next/image';
import Card from "../components/card";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("hi banner button");
  }
  return (
    <>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            width="500"
            height="400" />
        </div>
        <div className={styles.cardLayout}>
          <Card
            name="DarkHorse Coffee"
            imgUrl="/static/hero-image.png"
            href="/coffee-store/darkhorse-coffee"
            className={styles.card}
          />
        </div>
      </main >
    </>
  )
}
