import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import PageLayout from '../components/PageLayout'
import { useState } from 'react'


export default function Home( {articles} ) { // The prop 'articles' gives the news

  return (
    <PageLayout title='Your News - Home'>
      <div className='{styles.cointainer}'>
        {articles.length === 0 && <p>Loading...</p>}
        {articles.length > 0 && articles.map((article, index) => (
          <article key={index}>
            <img 
              src={article.urlToImage}
            />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target='_blank'>Read More</a>
          </article>
        ))} 
      </div>
    </PageLayout>
  )
}

// N - request --> N times executed - Useful for light data or a lot of dynamic data
// Retrieve th articles in the server, when the user go to the page, it has the articles already
export async function getServerSideProps() {
  const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-12-30&to=2023-12-30&sortBy=popularity&apiKey=54b9b87b6e6a40cba3c434cdc8aee8a5'
    )
  const { articles } = await response.json()
  return {
    props: {
      articles
    }
  }
}