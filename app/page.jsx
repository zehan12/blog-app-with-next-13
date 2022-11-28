import Image from 'next/image'
import Articles from '../components/Articles'
import Hero from '../components/Hero'
import styles from './page.module.css'
import "../components/ArticleSection"
import HeroSection from '../components/HeroSection'
import Stats from '../components/Stats'

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <HeroSection />
        <Stats />
      </main>
    </div>
  )
}
