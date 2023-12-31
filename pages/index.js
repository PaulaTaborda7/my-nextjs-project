import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>

      <h1>News App Home</h1>

      <Link href='/about'> Ir a about</Link>

    </div>
  )
}
