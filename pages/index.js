import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to HERE</h1>
      <Link href='/about'>About</Link>
      <Link href='/contact'>Contact</Link>
    </div>
  )
}
