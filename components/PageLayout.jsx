import Head from 'next/head';
import Link from 'next/link'

export default function PageLayout({ children, title = 'NewsApp' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="Your digital newspaper" />
        <Link rel='icon' href='/favicon.ico' />
      </Head>
      <header> 
        <div>
          <Link href="/">🍓 Newsapi </Link>
        </div>
        <div>
          <Link href='/about'> About </Link>
        </div>
      </header>
      <main>
        {children}
      </main>
      <style jsx> {
        `
        header {
          background-color: #333;
          color: #fff;
          padding: 15px;
          text-align: center;
        }
        main {
          padding: 15px;
        }
        `

      }
      </style>
    </>
  );
}