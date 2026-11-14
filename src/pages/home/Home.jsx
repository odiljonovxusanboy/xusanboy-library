import React from 'react'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import Books from '../../components/books/Books'
import Trusted from '../../components/trusted/Trusted'
import Learn from '../../components/learn/Learn'
import Chapter from '../../components/chapter/Chapter'
import Reviews from '../../components/reviews/Reviews'
import Articles from '../../components/articles/Articles'
import FreeChapter from '../../components/freeChapter/FreeChapter'
import Footer from '../../components/footer/Footer'
import AboutAuthor from '../../components/aboutAuthor/AboutAuthor'
import GetBook from '../../components/getBook/GetBook'

const Home = () => {
  return (
    <div>
        <Header/>
        <Main/>
        <Books/>
        <AboutAuthor/>
        <Trusted/>
        <GetBook/>
        <Learn/>
        <Chapter/>
        <Reviews/>
        <Articles/>
        <FreeChapter/>
        <Footer/>
    </div>
  )
}

export default Home